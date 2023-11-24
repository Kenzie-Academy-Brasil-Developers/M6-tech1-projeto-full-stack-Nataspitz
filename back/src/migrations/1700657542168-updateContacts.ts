import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateContacts1700657542168 implements MigrationInterface {
    name = 'UpdateContacts1700657542168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_8c17e6f04bd3fdd6053f3e7ebea"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "name" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_f9f62556c7092913f2a06975052"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "phone" character varying(11) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_f9f62556c7092913f2a06975052" UNIQUE ("phone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "UQ_f9f62556c7092913f2a06975052"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "phone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_f9f62556c7092913f2a06975052" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "contact" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "contact" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "UQ_8c17e6f04bd3fdd6053f3e7ebea" UNIQUE ("name")`);
    }

}
