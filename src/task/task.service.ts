import { Injectable, Inject } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { task } from './data/task';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { REQUEST } from '@nestjs/core';


@Injectable()
export class TaskService {

    constructor(private prisma: PrismaService,
        @Inject(REQUEST) private req: any,
    ) { }

    async createTask(data: CreateTaskDto) {
        data.id_user = this.req.user.id
        const createData = await this.prisma.task.create({
            data: data,
        });

        return {
            statusCode: 200,
            data: createData
        }
    }

    async getAllTask() {
        const dataTask = await this.prisma.task.findMany({
            where: {
                id_user: this.req.user.id
            },
            include: {
                users: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        avatar: true
                    }
                }
            }
        })
        return {
            statusCode: 200,
            data: dataTask
        }
    }

    async getTaskById(task_id: number) {
        const dataTask = await this.prisma.task.findFirst({
            where: {
                id: task_id,
                id_user: this.req.user.id
            }
        })
        return {
            statusCode: 200,
            data: dataTask
            // data: task.find((task) => task.task_id == task_id)
        }
    }

    async updateTaskById(task_id: number, data: UpdateTaskDto) {
        data.id_user = this.req.user.id
        const updateTask = await this.prisma.task.update({
            where: {
                id: task_id
            },
            data: data
        })
        return {
            statusCode: 200,
            data: updateTask
        }
    }

    async deleteTaskById(task_id: number) {
        const deleteTask = await this.prisma.task.delete({
            where: {
                id: task_id
            }
        })
        return {
            statusCode: 200,
            data: deleteTask,
            // data: task.find((task) => task.task_id == task_id),
            message: "Sukses delete data"
        }
    }
}
