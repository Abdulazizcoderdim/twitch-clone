import {
	Injectable,
	type OnModuleDestroy,
	type OnModuleInit
} from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	public async onModuleDestroy() {
		await this.$disconnect()
	}

	public async onModuleInit() {
		await this.$connect()
	}
}
