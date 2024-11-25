'use strict';
const controller = require('../../controller/index');


const {send} = require('micro')
const {withNamespace, router, get, post} = require('microrouter');
const oldApi = withNamespace('/api/v1')


const create_user = async (req, res) => {

	const users = await controller.users.users(req.params.method, req.body.username);
	send(res, 200, users);
};


const remove_user = async (req, res) => {

	const users = await controller.users.users(req.params.method, req.params.user_id);
	send(res, 200, users);
};


const create_user_task = async (req, res) => {

	const tasks_id = await controller.tasks.tasks(req.params.method, req.body.title, req.params.user_id);
	send(res, 200, tasks_id);
};


const remove_user_task = async (req, res) => {

	const tasks_id = await controller.tasks.tasks(req.params.method, req.params.task_id);
	send(res, 200, tasks_id);
};

  
const notFound = async (req, res) => {
	send(res, 404, 'HTTP 404 - Endpoint not found');
};


module.exports = router(

	// oldApi(get('/health', health)),					
	oldApi(get('/create_user', create_user)),					
	oldApi(get('/remove_user', remove_user)),					
	oldApi(get('/create_user_task', create_user_task)),					
	oldApi(get('/remove_user_task', remove_user_task)),					

	oldApi(get('/*', notFound)),

);
