-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "username" VARCHAR(50) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "post.username_unique" ON "post"("username");
