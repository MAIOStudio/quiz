// GET /quizes/question
exports.question = funtion(req, res){
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

// GET /quizes/answer
exports.answer = funtion(req, res){
  if(res.query.respuesta === 'Roma'){
    res.render('/quizes/answer', {respuesta: 'Correcta'});
  } else {
    res.render('quizes/answer', {respuesta: 'Incorrecto'});
  }
};
