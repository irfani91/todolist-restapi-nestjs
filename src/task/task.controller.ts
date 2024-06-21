import { Body, Controller, Post, Get, Param, Patch, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    //@UsePipes(ValidationPipe)
    @UseGuards(AuthGuard)
    @Post()
    async createTask(@Body() body: CreateTaskDto) {
        return await this.taskService.createTask(body);
    }

    @UseGuards(AuthGuard)
    @Get()
    async getAllTask() {
        return await this.taskService.getAllTask();
    }

    @UseGuards(AuthGuard)
    @Get('/:task_id')
    async getTaskById(@Param('task_id') task_id) {
        return await this.taskService.getTaskById(+task_id);
    }

    @UseGuards(AuthGuard)
    @Patch('/:task_id')
    async updateTaskById(@Param('task_id') task_id, @Body() body: UpdateTaskDto) {
        return await this.taskService.updateTaskById(+task_id, body);
    }

    @UseGuards(AuthGuard)
    @Delete('/:task_id')
    async deleteTaskById(@Param('task_id') task_id) {
        return await this.taskService.deleteTaskById(+task_id);
    }
}
