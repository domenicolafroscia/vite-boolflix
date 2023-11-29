<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <header>
        <div class="container">
            <h1>BOOLFLIX</h1>
            <div class="search">
                <input type="search" v-model.trim="store.searchText">
                <button @click="$emit('btn-click')">Search</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
header {
    background-color: black;
    padding-top: 3rem;
    padding-bottom: 1.5rem;

    .container {
        margin: 0 auto;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 {
            color: red;
        }

        .search {
            input {
                margin-right: .5rem;
                height: 30px;
            }

            button {
                height: 30px;
            }
        }
    }
}
</style>


