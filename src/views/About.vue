<template>
    <div class="about">
        <input type="text" />
        <div v-drag class="vue-drag"></div>
        <div>
            <div v-for="(item, index) in tableData" :key="index">{{ item.name }}</div>
        </div>
    </div>
</template>
<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
    setup(props) {
        const tableData = ref([]);
        const getdata = () => {
            axios
                .get(
                    "/inspection/plans?pageNum=1&pageSize=20"
                )
                .then(res => {
                    tableData.value = res.data.data;
                });
        };
        onMounted(getdata);
        return {
            tableData
        };
    },
    created() {},
    methods: {
        incrementCount() {
            this.count++;
        }
    }
};
</script>

<style lang="scss">
.vue-drag {
    width: 100px;
    height: 100px;
    background: red;
    position: fixed;
    cursor: move;
}
</style>
