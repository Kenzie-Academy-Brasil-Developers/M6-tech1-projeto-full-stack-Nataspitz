import { MigrationInterface, QueryRunner } from "typeorm";

export class Update1700829461992 implements MigrationInterface {
    name = 'Update1700829461992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_8c17e6f04bd3fdd6053f3e7ebea" UNIQUE ("name")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_8c17e6f04bd3fdd6053f3e7ebea"`);
    }

}
