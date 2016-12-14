<?php


namespace app\admin\controller;
//use think\Controller;
use app\admin\controller\Auth;
use app\admin\model\User;
use app\admin\model\Company;
use app\admin\model\Position;
use app\admin\model\Content;
use think\Session;
use think\Db;
use think\Connection;
//use think\Tpl;
//use think\View;
class Index extends Auth

{
	// public function _initialize()
	// {
	// 	$user = new User();
	//     $name = $user->profile();
	// 	$this->assign('name', $name);
	// }
	// 
	
	public function zhu()
	{
		$result = Db::name('user')->select();
		return view();
	}
	/**
	 * 职位列表
	 * @return [type] [description]
	 */
	public function posi()
	{
		$obj = new Position();
		$result = $obj->sel();
		// dump($result);die;
		return view('', compact('result'));
	}
	public function web()
	{
		
		$obj = new User;
		if($_POST['button'] == '开启'){
			// $result = $obj->save(['web'=>1],['uid'=>73]);
			// 
			$result = Db::name('user')->where('uid', 73)->update(['web'=>1]);
			// dump($result);die();
			if($result){
				echo json_encode(array('status'=>1,'msg'=>'关闭'));
			}else{
				echo json_encode(array('status'=>0,'msg'=>'失败'));
			}
		}else if($_POST['button'] == '关闭'){

			//$result = Db::name('user')->where('uid', 73)->setField('web',0);
			$result = $obj->save(['web'=>0],['uid'=>73]);

			// dump($result);die;
			if($result){
				echo json_encode(array('status'=>1,'msg'=>'开启'));
			}else{
				echo json_encode(array('status'=>0,'msg'=>'失败'));
			}
		}else{
			echo json_encode(array('status'=>0,'msg'=>'操作错误'));
		}
		
	}
	/**
	 * 后台首页
	 * @return [type] [description]
	 */
	public function index()
	{

		return View();
	}
	/**
	 * 企业详情展示
	 * @return [type] [description]
	 */
	public function identify()
	{
		$com = new User;
		 
		$binfo = $com->editcom();
		// $page = $binfo->rendor
		//dump($binfo);
		return view('',compact('binfo'));
	}
	/**
	 * 消息显示
	 * @return [type] [description]
	 */
	public function message()
	{
		$posi = new Content();
		$result = $posi->news();
		return view('',compact('result'));
	}
	/**
	 * 用户详情展示
	 * @return [type] [description]
	 */
	public function userinfo()
	{
		$user = new User;
		$arr = $user->sel();
		return view('',compact('arr'));
	}
	/**
	 * 站点展示
	 * @return [type] [description]
	 */
	public function webset()
	{
		$result = Db::name('user')->where('uid',73)->find();
		//dump($result);die();
		return view('',compact('result'));
	}


	public function vocation()
	{
		$voca = new Vocation();
		$vo = $voca->sel();
		dump($vo);die();
		return view();
	}

	/**
	 * 黑名单
	 * @return [type] [description]
	 */
	public function blacklist()
	{
		 $result = new Company();
		 $result = $result->sel();
		 $userObj = new User();
		 $res = $userObj->findSel();

		//$result = Company::onlyTrashed()->select();
		// foreach ($result as  $value) {
		// 	dump($value);die();
		// }
		 // dump($result);die();
		return view('',compact('result','res'));
	}
}