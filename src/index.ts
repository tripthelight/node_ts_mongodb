// import 'dotenv/config';
require('dotenv').config({path: 'variables.env'});
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import PostController from '@/resources/post/post.controller';

console.log(process.env);

// validateEnv();

const app = new App(
    [new PostController()],
    Number(process.env.PORT)
);

app.listen();