<?php

namespace app\admin\controller;

use think\Controller;
use app\admin\model\User;
use app\admin\model\Personinfo;
// use think\Db;
use think\Session;
use think\Request;
class Auth extends Controller
{
	public function __construct(Request $request)
	{
		// parent::__construct();
		// // dump($request->controller());
		// if(!$this->checkLogin() && $request->controller() != 'Auth')
		// {
		// 	$this->error('请登录');

		// }
	}
	public function dolog()
	{
		
		$username=$_POST['email'];
		//dump($_POST);die();
		$userObj = new User();
		$user = $userObj->getUser($username);
	
		if($user['email']){
			echo json_encode(array('status'=>1, 'msg'=>'登陆成功'));die();
		}else{
			echo json_encode(array('status' => 0, 'msg' => '用户名错误', 'data' => []));die();
		}
	}
	public function checklog()
	{
		
		$user = User::where('email', $_POST['email'])->find();

		$name = $user->personinfo->realname;

		if($_POST['email'] == $user['email'] ){
			if(md5($_POST['password']) == $user['password'] ){
				Session::set('username', $_POST['email']);
				Session::set('password', md5($_POST['password']));
				Session::set('uid', $user['uid']);
				Session::set('realname',$name);
				echo json_encode(array('status'=>1, 'msg'=>'登陆成功'));die();
			}else {
				echo json_encode(array('status' => 0, 'msg' => '密码错误', 'data' => []));die();
			}
		}else{
			echo json_encode(array('status' => 0, 'msg' => '用户名错误', 'data' => []));die();
		}

	}
	public function checkLogin()
	{
		return session('uid');
	}

	public function checkout()
	{
		Session(null);
		$this->success('退出成功', 'http://www.goodjob.com');
	}
}























