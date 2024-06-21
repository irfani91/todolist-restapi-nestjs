import { Test, TestingModule } from '@nestjs/testing';
import { SchoolService } from './school.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SchoolService', () => {
  let service: SchoolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolService, PrismaService],
    }).compile();

    service = module.get<SchoolService>(SchoolService);
  });

  it('Create School', async () => {
    await service.removeByEmail('test@example.com')
    const newData = {
      school_name: 'Test 1',
      email: 'test@example.com',
      address: 'ikn',
      phone: '08180682323',
    };
    expect((await service.create(newData)).data.email).toEqual((await service.findEmail(newData.email)).data.email);
  });

  // it('Find one latihan', async () => {
  //   const data = {
  //     name: 'Test 1',
  //     email: 'test@example.com',
  //   };
  //   await service.create(data);
  //   expect(await service.findOne(data.email)).toEqual(data);
  // });

  // it('Find many latihan', async () => {
  //   const data = {
  //     name: 'Test 1',
  //     email: 'test@example.com',
  //   };
  //   const data2 = {
  //     name: 'Test 1',
  //     email: 'test@example.com',
  //   };
  //   await service.create(data);
  //   await service.create(data2);
  //   expect(await service.findAll()).toEqual([data, data2]);
  // });
});
