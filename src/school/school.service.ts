import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchoolService {

  constructor(private prisma: PrismaService) { }

  async create(createSchoolDto: CreateSchoolDto) {
    const createSchool = await this.prisma.schools.create({
      data: createSchoolDto
    })
    if (createSchool) {
      return {
        statusCode: 200,
        data: createSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async findAll() {
    const dataSchool = await this.prisma.schools.findMany()
    if (dataSchool) {
      return {
        statusCode: 200,
        data: dataSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async findOne(id: number) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        id
      }
    })
    if (dataSchool) {
      return {
        statusCode: 200,
        data: dataSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async update(id: number, updateSchoolDto: UpdateSchoolDto) {
    const updateSchool = await this.prisma.schools.update({
      data: updateSchoolDto,
      where: {
        id
      }
    })
    if (updateSchool) {
      return {
        statusCode: 200,
        message: "Data updated successfully !",
        data: updateSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async remove(id: number) {
    const deleteSchool = await this.prisma.schools.delete({
      where: {
        id
      }
    })
    if (deleteSchool) {
      return {
        statusCode: 200,
        message: "Data deleted successfully !",
        data: deleteSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async findEmail(email: string) {
    const dataSchool = await this.prisma.schools.findFirst({
      where: {
        email: email
      }
    })
    if (dataSchool) {
      return {
        statusCode: 200,
        data: dataSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }

  async removeByEmail(email: string) {
    try {
      
    } catch (error) {
      return error.message
    }
    const deleteSchool = await this.prisma.schools.delete({
      where: {
        email
      }
    })
    if (deleteSchool) {
      return {
        statusCode: 200,
        message: "Data deleted successfully !",
        data: deleteSchool
      }
    }
    throw new HttpException(" Request Error ", HttpStatus.BAD_REQUEST);
  }
}
