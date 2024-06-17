-- CreateTable
CREATE TABLE "NextUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "NextUser_pkey" PRIMARY KEY ("id")
);
