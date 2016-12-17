<template>
    <div>
        <group-title>base</group-title>
        <swipe>
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
        <group-title>defaultIndex</group-title>
        <swipe :defaultIndex="1">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
        <group-title>showIndicator</group-title>
        <swipe :showIndicator="false">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
        <group-title>autoplay</group-title>
        <swipe :autoplay="false">
            <swipe-item>
                <div class="page-swipe-item bg-primary">1</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-secondary">2</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-success">3</div>
            </swipe-item>
        </swipe>
    </div>
</template>


<style>
    .swipe {
        height: 200px;
    }

    .page-swipe-item {
        color: #fff;
        height: 100%;
        line-height: 200px;
        text-align: center;
        font-size: 30px;
        font-weight: bold;
    }
</style>
