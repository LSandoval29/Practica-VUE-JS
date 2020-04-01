<template>
    <div>
        <ul class="list-group">
            <li v-for="(item,index) of frutas" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.name}}
                <span class="badge badge-primary badge-pill">{{item.quantity}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block mt-3" @click="reiniciar">Reiniciar</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name: 'Lista',
    computed:{
        ...mapState(['frutas']),
        
    },
    methods:{
        ...mapMutations(['aumentar', 'reiniciar'])
    }

}
</script>