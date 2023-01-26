-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "genres_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "genre_id" INTEGER NOT NULL,
    "viewed" BOOLEAN NOT NULL,
    "note" TEXT,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "platforms_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

-- CreateIndex
CREATE UNIQUE INDEX "movies_name_key" ON "movies"("name");

-- CreateIndex
CREATE UNIQUE INDEX "platforms_name_key" ON "platforms"("name");

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk0" FOREIGN KEY ("platform_id") REFERENCES "platforms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movies" ADD CONSTRAINT "movies_fk1" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
