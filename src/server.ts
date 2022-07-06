import startUp from './StartUp';

let port = process.env.PORT || 3001;

startUp.app.listen(port,()=> console.log(`server running on port ${port}`));
console.log('teste  teste');
