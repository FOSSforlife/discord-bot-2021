-- CreateTable
CREATE TABLE "Guild" (
    "discordId" INTEGER NOT NULL,
    "guildSettings" JSONB,

    PRIMARY KEY ("discordId")
);

-- CreateTable
CREATE TABLE "User" (
    "discordId" INTEGER NOT NULL,
    "lastFmUsername" TEXT,

    PRIMARY KEY ("discordId")
);
