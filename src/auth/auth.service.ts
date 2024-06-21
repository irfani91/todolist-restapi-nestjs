import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { jwt_config } from 'src/config/jwt_config';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) { }


    /**
     * Description placeholder
     *
     * @async
     * @param {RegisterDto} data
     * @returns {unknown}
     */
    async register(data: RegisterDto) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                email: data.email
            }
        })
        if (checkUserExists) {
            throw new HttpException("User has registered", HttpStatus.FOUND)
        }
        data.password = await hash(data.password, 12)
        const cretedUser = await this.prisma.users.create({
            data
        })
        if (cretedUser) {
            return {
                statusCode: HttpStatus.OK,
                message: "register successfully"
            }
        }
    }

    /**
     * Description placeholder
     *
     * @async
     * @param {LoginDto} data
     * @returns {unknown}
     */
    async login(data: LoginDto) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                email: data.email
            }
        });
        if (!checkUserExists) {
            throw new HttpException("User not found", HttpStatus.NOT_FOUND)
        }
        const checkPassword = await compare(data.password, checkUserExists.password)
        if (checkPassword) {
            const accessToken = this.generateJWT({
                sub: checkUserExists.id,
                name: checkUserExists.name,
                email: checkUserExists.email
            })
            return {
                statusCode: 200,
                message: "Login berhasil",
                accessToken: accessToken
            }
        } else {
            throw new HttpException("User or password not match", HttpStatus.UNAUTHORIZED)
        }
    }

    /**
     * Description placeholder
     *
     * @param {*} payload
     * @returns {*}
     */
    generateJWT(payload: any) {
        return this.jwtService.sign(payload, {
            secret: jwt_config.secret,
            expiresIn: jwt_config.expired
        })
    }

    /**
     * Description placeholder
     *
     * @async
     * @param {number} user_id
     * @returns {unknown}
     */
    async profile(user_id: number) {
        const dataUser = await this.prisma.users.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
                task: true
            }
        })
        if (dataUser) {
            return {
                statusCode: HttpStatus.OK,
                data: dataUser
            }
        }
    }

    async uploadAvatar(user_id: number, avatar) {
        const checkUserExists = await this.prisma.users.findFirst({
            where: {
                id: user_id
            }
        })
        if (checkUserExists) {
            const updateAvatar = await this.prisma.users.update({
                data: {
                    avatar: avatar
                },
                where: {
                    id: user_id
                }
            })
            if (updateAvatar) {
                return {
                    statuscode: HttpStatus.OK,
                    message: 'Upload avatar berhasil',
                }
            }
        }
        throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
    }
}
