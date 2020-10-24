<?php
/**
 * @copyright   Copyright (c) http://careyshop.cn All rights reserved.
 *
 * CareyShop    WeChat 控制器
 *
 * @author      zxm <252404501@qq.com>
 * @date        2020/10/20
 */

namespace app\api\controller\v1;

use app\api\controller\CareyShop;
use app\common\wechat\service\Server;
use app\common\wechat\service\User;

class WeChat extends CareyShop
{
    /**
     * 方法路由器
     * @access protected
     * @return void
     */
    protected static function initMethod()
    {
        $server = self::getServerMethod();
        $user = self::getUserMethod();

        self::$route = array_merge($server, $user);
    }

    /**
     * 服务端方法
     * @access private
     * @return string[][]
     */
    private static function getServerMethod()
    {
        return [
            // 接收并响应微信推送
            'put.wechat.data' => ['putWeChatData', Server::class],
        ];
    }

    /**
     * 用户管理方法
     * @access private
     * @return string[][]
     */
    private static function getUserMethod()
    {
        return [
            // 同步公众号用户
            'get.official_account.user.sync'      => ['getUserSync', User::class],
            // 获取公众号订阅渠道来源
            'get.official_account.user.subscribe' => ['getSubscribeScene', User::class],
            // 获取一个公众号用户
            'get.official_account.user.item'      => ['getUserItem', User::class],
            // 获取公众号用户列表
            'get.official_account.user.list'      => ['getUserList', User::class],
            // 设置公众号用户的备注
            'set.official_account.user.remark'    => ['setUserRemark', User::class],
            // 同步公众号黑名单
            'get.official_account.black.sync'     => ['getBlackSync', User::class],
            // 获取公众号黑名单列表
            'get.official_account.black.list'     => ['getBlackList', User::class],
            // 拉黑公众号用户
            'get.official_account.black.block'    => ['getBlackBlock', User::class],
            // 取消公众号拉黑用户
            'get.official_account.black.unblock'  => ['getBlackUnblock', User::class],
        ];
    }
}
