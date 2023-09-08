USE datasetdb;

-- # DROP TABLE chatmodels;
-- # DROP TABLE chats;
-- # DROP TABLE messages;
-- # DROP TABLE deletedmessages;
-- # DROP TABLE subscriptionplans;
-- # DROP TABLE subscriptions;
-- # DROP TABLE users;

-- Tabela de Users (com campos de auditoria)
CREATE TABLE Users (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    RegistryDate TIMESTAMP,
    CreatedBy INT,             -- ID do usuário que criou o registro
    CreatedDate TIMESTAMP,     -- Data e hora de criação
    UpdatedBy INT,             -- ID do usuário que atualizou o registro
    UpdatedDate TIMESTAMP      -- Data e hora da última atualização
);

-- Tabela de ChatModels (com campos de auditoria)
CREATE TABLE ChatModels (
    ModelID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    Configuration JSON,
    MonthlyPrice DECIMAL(10, 2) NOT NULL,
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP
);

-- Tabela de Chats (com campos de auditoria)
CREATE TABLE Chats (
    ChatID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    CreationDate TIMESTAMP,
    EndDate TIMESTAMP,
    Status ENUM('active', 'finished', 'archived'),
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP,
    ModelID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (ModelID) REFERENCES ChatModels(ModelID)
);

-- Adicionar um Índice à coluna UserID na tabela Chats
CREATE INDEX idx_UserID ON Chats(UserID);

-- Tabela de Messages (Com Exclusão Lógica e campos de auditoria)
CREATE TABLE Messages (
    MessageID INT AUTO_INCREMENT PRIMARY KEY,
    ChatID INT,
    UserType ENUM('user', 'model'),
    Content TEXT,
    SentDate TIMESTAMP,
    IsDeleted BOOLEAN DEFAULT FALSE,
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP,
    FOREIGN KEY (ChatID) REFERENCES Chats(ChatID)
);


-- Tabela de SubscriptionPlans (com campos de auditoria)
CREATE TABLE SubscriptionPlans (
    PlanID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Description TEXT,
    MonthlyPrice DECIMAL(10, 2) NOT NULL,
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP
);

-- Tabela de Subscriptions (com campos de auditoria)
CREATE TABLE Subscriptions (
    SubscriptionID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT NOT NULL,
    PlanID INT NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE,
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (PlanID) REFERENCES SubscriptionPlans(PlanID)
);

-- Tabela de DeletedMessages (com campos de auditoria)
CREATE TABLE DeletedMessages (
    MessageID INT PRIMARY KEY,
    UserID INT NOT NULL,
    DeleteDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CreatedBy INT,
    CreatedDate TIMESTAMP,
    UpdatedBy INT,
    UpdatedDate TIMESTAMP,
    FOREIGN KEY (MessageID) REFERENCES Messages(MessageID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
