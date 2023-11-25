import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1700914022230 implements MigrationInterface {
    name = 'CreateTables1700914022230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(50) NOT NULL, "email" character varying NOT NULL, "password" character varying(150) NOT NULL, "phone" character varying(11) NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "UQ_6436cc6b79593760b9ef921ef12" UNIQUE ("email"), CONSTRAINT "UQ_368ca99acdbd5502fc08b3f7796" UNIQUE ("phone"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "phone" character varying(11) NOT NULL, "createdAt" TIMESTAMP NOT NULL, "clientId" uuid, CONSTRAINT "UQ_8c17e6f04bd3fdd6053f3e7ebea" UNIQUE ("name"), CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "email_contact" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "contactId" uuid, CONSTRAINT "PK_888e7c26c6df82af4ed895ab5e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contact" ADD CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "email_contact" ADD CONSTRAINT "FK_dcbcaabf37a82bc94178e7c8222" FOREIGN KEY ("contactId") REFERENCES "contact"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "email_contact" DROP CONSTRAINT "FK_dcbcaabf37a82bc94178e7c8222"`);
        await queryRunner.query(`ALTER TABLE "contact" DROP CONSTRAINT "FK_e99f8e5bcbccaec7b0b7ed65526"`);
        await queryRunner.query(`DROP TABLE "email_contact"`);
        await queryRunner.query(`DROP TABLE "contact"`);
        await queryRunner.query(`DROP TABLE "client"`);
    }

}
