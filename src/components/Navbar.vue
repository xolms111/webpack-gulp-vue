<template>
    <div class="top-bar">
        <div class="top-bar-left">
            <ul class="menu">
                <li><a v-link="{name: 'pageA'}">页面1</a></li>
                <li><a v-link="{name: 'pageB'}">页面2</a></li>
            </ul>
        </div>
        <div class="top-bar-right">
            {{ userName }}
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                userName: 'sammiu'
            }
        }
    }
</script>
