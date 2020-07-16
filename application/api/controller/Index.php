<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    Api控制器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2017/03/23
 */

namespace app\api\controller;

class Index
{
    public function index()
    {
        $isRest = db('setting')->where(['code' => 'open_api_rest', 'module' => 'system_info'])->value('value');
        return $isRest || input('?get.key') ? view() : ['status' => 200, 'data' => '欢迎使用CareyShop商城框架系统 - Api'];
    }
}
