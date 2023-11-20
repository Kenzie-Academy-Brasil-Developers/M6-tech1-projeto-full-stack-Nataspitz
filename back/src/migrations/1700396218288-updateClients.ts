import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClients1700396218288 implements MigrationInterface {
    name = 'UpdateClients1700396218288'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "fullName" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(150) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "fullName" character varying(30) NOT NULL`);
    }

}
