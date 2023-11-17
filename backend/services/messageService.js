const MessageDAO = require('../dao/messagesDAO');

module.exports = {

  createMessage: async (chatID, modelID, content, userType='user') => {

    try {
      const createdMessage = await MessageDAO.createMessage(chatID, modelID, content, userType);
    } catch (error) {
      console.log('Não foi possível registrar a mensagem')
      throw error;
    }

    generatedAnswer = ''
    try{
      const generatedAnswer = await MessageDAO.generateMessage(content);
    } catch (error){
      console.log('Não foi possível gerar uma resposta')
      throw error;
    }

    try{
      const registeredAwnser = await MessageDAO.createMessage(
        chatID=chatID,
        modelID=modelID,
        content=generatedAnswer,
        userType='model'
      )
    } catch (error) {
      console.log(error)
      console.log('Não foi possível salvar a resposta no banco')
    }

    return generatedAnswer
  },

  getMessagesByChatID: async (chatID) => {
    try {
      // Adicione qualquer lógica de negócios necessária aqui, se aplicável.
      return await MessageDAO.getMessagesByChatID(chatID);
    } catch (error) {
      throw error;
    }
  },

  

  // Outras operações de lógica de negócios relacionadas a Messages
};
