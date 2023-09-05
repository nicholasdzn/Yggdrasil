
INSERT INTO Users (Name, Email, RegistryDate, CreatedBy, CreatedDate)
VALUES ('Alice Johnson', 'alice@example.com', '2023-08-25', 1, NOW());
INSERT INTO Chats (UserID, CreationDate, Status, CreatedBy, CreatedDate)
VALUES (2, NOW(), 'active', 1, NOW());
INSERT INTO Messages (ChatID, UserType, Content, SentDate, CreatedBy, CreatedDate)
VALUES (1, 'user', 'Olá, como vai?', NOW(), 2, NOW());
INSERT INTO ChatModels (Name, Description, Configuration, MonthlyPrice, CreatedBy, CreatedDate)
VALUES ('Modelo B', 'Um modelo de chatbot avançado', '{"setting1": "value1", "setting2": "value2"}', 14.99, 1, NOW());
INSERT INTO SubscriptionPlans (Name, Description, MonthlyPrice, CreatedBy, CreatedDate)
VALUES ('Plano Premium Plus', 'Acesso a recursos avançados e suporte prioritário', 29.99, 1, NOW());
INSERT INTO Subscriptions (UserID, PlanID, StartDate, CreatedBy, CreatedDate)
VALUES (2, 2, '2023-08-25', 1, NOW());
INSERT INTO DeletedMessages (MessageID, UserID, CreatedBy, CreatedDate)
VALUES (1, 2, 2, NOW());


INSERT INTO Users (Name, Email, RegistryDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Alice Johnson', 'alice@example.com', '2023-08-25', 1, NOW(), 1, NOW());

INSERT INTO Users (Name, Email, RegistryDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Bob Smith', 'bob@example.com', '2023-08-25', 1, NOW(), 1, NOW());

-- Adicione mais inserções de usuários aqui...
INSERT INTO Chats (UserID, CreationDate, EndDate, Status, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (1, NOW(), NULL, 'active', 1, NOW(), 1, NOW());

INSERT INTO Chats (UserID, CreationDate, EndDate, Status, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (2, NOW(), NULL, 'active', 1, NOW(), 1, NOW());

-- Adicione mais inserções de chats aqui...

INSERT INTO Messages (ChatID, UserType, Content, SentDate, IsDeleted, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (1, 'user', 'Olá, como vai?', NOW(), 0, 2, NOW(), 2, NOW());

INSERT INTO Messages (ChatID, UserType, Content, SentDate, IsDeleted, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (1, 'model', 'Olá, estou bem, obrigado!', NOW(), 0, 1, NOW(), 1, NOW());

-- Adicione mais inserções de mensagens aqui...

INSERT INTO ChatModels (Name, Description, Configuration, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Modelo C', 'Um modelo avançado de chatbot', '{"setting1": "value1", "setting2": "value2"}', 19.99, 1, NOW(), 1, NOW());

INSERT INTO ChatModels (Name, Description, Configuration, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Modelo D', 'Um modelo premium de chatbot', '{"setting1": "value1", "setting2": "value2"}', 29.99, 1, NOW(), 1, NOW());

-- Adicione mais inserções de modelos de chatbot aqui...

INSERT INTO SubscriptionPlans (Name, Description, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Plano Standard', 'Acesso básico aos recursos', 9.99, 1, NOW(), 1, NOW());

INSERT INTO SubscriptionPlans (Name, Description, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Plano Premium', 'Acesso a recursos avançados', 19.99, 1, NOW(), 1, NOW());

-- Adicione mais inserções de planos de assinatura aqui...

INSERT INTO Subscriptions (UserID, PlanID, StartDate, EndDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (1, 1, '2023-08-25', NULL, 1, NOW(), 1, NOW());

INSERT INTO Subscriptions (UserID, PlanID, StartDate, EndDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (2, 2, '2023-08-25', NULL, 1, NOW(), 1, NOW());

-- Adicione mais inserções de assinaturas aqui...

INSERT INTO DeletedMessages (MessageID, UserID, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (1, 2, 2, NOW(), 2, NOW());

-- Adicione mais inserções de mensagens excluídas aqui...




INSERT INTO Users (Name, Email, RegistryDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Carol Williams', 'carol@example.com', '2023-08-25', 1, NOW(), 1, NOW());

INSERT INTO Users (Name, Email, RegistryDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('David Lee', 'david@example.com', '2023-08-26', 1, NOW(), 1, NOW());

-- Adicione mais inserções de usuários aqui...


INSERT INTO Chats (UserID, CreationDate, EndDate, Status, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (3, NOW(), NULL, 'active', 1, NOW(), 1, NOW());

INSERT INTO Chats (UserID, CreationDate, EndDate, Status, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (4, NOW(), NULL, 'active', 1, NOW(), 1, NOW());

-- Adicione mais inserções de chats aqui...

INSERT INTO Messages (ChatID, UserType, Content, SentDate, IsDeleted, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (3, 'user', 'Oi, como você está?', NOW(), 0, 4, NOW(), 4, NOW());

INSERT INTO Messages (ChatID, UserType, Content, SentDate, IsDeleted, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (3, 'model', 'Estou bem, obrigado!', NOW(), 0, 1, NOW(), 1, NOW());

-- Adicione mais inserções de mensagens aqui...

INSERT INTO ChatModels (Name, Description, Configuration, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Modelo E', 'Um modelo avançado de chatbot', '{"setting1": "value1", "setting2": "value2"}', 39.99, 1, NOW(), 1, NOW());

INSERT INTO ChatModels (Name, Description, Configuration, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Modelo F', 'Um modelo premium de chatbot', '{"setting1": "value1", "setting2": "value2"}', 49.99, 1, NOW(), 1, NOW());

-- Adicione mais inserções de modelos de chatbot aqui...

INSERT INTO SubscriptionPlans (Name, Description, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Plano Básico', 'Acesso mínimo aos recursos', 4.99, 1, NOW(), 1, NOW());

INSERT INTO SubscriptionPlans (Name, Description, MonthlyPrice, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES ('Plano Premium Gold', 'Acesso a recursos avançados e suporte 24/7', 59.99, 1, NOW(), 1, NOW());

-- Adicione mais inserções de planos de assinatura aqui...

INSERT INTO Subscriptions (UserID, PlanID, StartDate, EndDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (3, 1, '2023-08-25', NULL, 1, NOW(), 1, NOW());

INSERT INTO Subscriptions (UserID, PlanID, StartDate, EndDate, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (4, 2, '2023-08-26', NULL, 1, NOW(), 1, NOW());

-- Adicione mais inserções de assinaturas aqui...

INSERT INTO DeletedMessages (MessageID, UserID, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (2, 3, 3, NOW(), 3, NOW());

INSERT INTO DeletedMessages (MessageID, UserID, CreatedBy, CreatedDate, UpdatedBy, UpdatedDate)
VALUES (4, 4, 4, NOW(), 4, NOW());

-- Adicione mais inserções de mensagens excluídas aqui...
