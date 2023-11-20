import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateClients1700395669570 implements MigrationInterface {
    name = 'UpdateClients1700395669570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "client" ADD "password" character varying(15) NOT NULL`);
    }

}
