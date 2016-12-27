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
            <swipe-item>
                <div class="page-swipe-item bg-warning">4</div>
            </swipe-item>
            <swipe-item>
                <div class="page-swipe-item bg-danger">5</div>
            </swipe-item>
        </swipe>
        <group-title>defaultIndex=1</group-title>
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
        <group-title>dots=false</group-title>
        <swipe :dots="false">
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
        <group-title>autoplay=false</group-title>
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
