Page({
    data: {
        title: 'lottie',
        action: 'pause',
        hidden: false,
        path: '/anims/lottie_example.json',
        loop: true,
        status: '播放'
    },
    playLottie () {
        // 切换播放状态
        let action = this.data.action;
        action = action === 'pause' ? 'play': 'pause';
        let status = action === 'pause' ? '播放' : '停止';

        this.setData({
            action,
            status
        });
    }
});
