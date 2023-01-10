-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "articalStatus" BOOLEAN NOT NULL,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "publishAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorName" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tegCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tegCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertiesOnartical" (
    "articalId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "PropertiesOnartical_pkey" PRIMARY KEY ("articalId","categoryId")
);

-- AddForeignKey
ALTER TABLE "PropertiesOnartical" ADD CONSTRAINT "PropertiesOnartical_articalId_fkey" FOREIGN KEY ("articalId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertiesOnartical" ADD CONSTRAINT "PropertiesOnartical_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "tegCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
