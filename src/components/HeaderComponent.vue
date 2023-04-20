<template>
    <header>
        <div class="d-flex justify-content-between align-items-center h-100 px-4">
            <h1>Netflix</h1>
            <form class="d-flex gap-2">
                <input type="text" name="" id="" class="form-control bg-black rounded-5 text-white" placeholder="Film, serie TV, generi">
                <button class="btn btn-success">Ricerca</button>
            </form>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    header{
        width: 100%;
        height: 100px;
        background-color: black;
        h1{
            color: red;
        }
    }
</style>