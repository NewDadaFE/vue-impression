<template>
    <div class="container">
        <tip><span class="text-pure">科比系列</span></tip>
        <div class="prod-container clearfix">
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe8.jpg" alt="kobe 8">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe8 ZK8 科比八代低帮篮球鞋  全配色合集 745334-005科八蓝色 42
                        </p>
                        <div class="text-danger">¥ 998</div>
                    </card-body>
                </card>
            </div>
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe8.jpg" alt="kobe 8">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe8 ZK8 科比八代低帮篮球鞋  全配色合集 745334-005科八蓝色 42
                        </p>
                        <div class="text-danger">¥ 998</div>
                    </card-body>
                </card>
            </div>
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe9.jpg" alt="kobe 10">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe9 ZK9 科比九代低帮篮球鞋  全配色合集 745334-005科九蓝色 42
                        </p>
                        <div class="text-danger">¥ 1080</div>
                    </card-body>
                </card>
            </div>
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe9.jpg" alt="kobe 10">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe9 ZK9 科比九代低帮篮球鞋  全配色合集 745334-005科九蓝色 42
                        </p>
                        <div class="text-danger">¥ 1080</div>
                    </card-body>
                </card>
            </div>
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe10.jpg" alt="kobe 10">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe10 ZK10 科比十代低帮篮球鞋  全配色合集 745334-005科十紫色 42
                        </p>
                        <div class="text-danger">¥ 1380</div>
                    </card-body>
                </card>
            </div>
            <div class="prod-item">
                <card>
                    <img class="img-fluid" src="../../images/kobe10.jpg" alt="kobe 10">
                    <card-body>
                        <p class="prod-info">
                            Nike耐克 Kobe10 ZK10 科比十代低帮篮球鞋  全配色合集 745334-005科十紫色 42
                        </p>
                        <div class="text-danger">¥ 1380</div>
                    </card-body>
                </card>
            </div>
        </div>
    </div>
</template>

<style>
    .container {
        overflow: auto;
        padding-bottom: 0.5rem;
        background-color: #ccc;
    }
    .prod-container {
        padding-top: 0.4rem;
    }

    .prod-item {
        width: 50%;
        float: left;
        padding-bottom: 0.4rem
    }

    .prod-item:nth-child(2n + 1) {
        padding-left: 0.6rem;
        padding-right: 0.2rem;
    }

    .prod-item:nth-child(2n) {
        padding-left: 0.2rem;
        padding-right: 0.6rem;
    }

    .prod-info {
        height: 34px;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
</style>
