<template>
  <div class="releases">
    <span :class="{ 'alert': alert }" class="login100-form-title"> Digite os dados da nova APR </span>
    <form class="login100-form validate-form">
      <div class="wrap-input100 validate-input">
        <input
          v-model="data.local"
          :class="{ 'has-val': data.local }"
          class="input100"
          type="text"
        />
        <span class="focus-input100" data-placeholder="Área / Local"></span>
      </div>

      <div class="wrap-input100 validate-input">
        <input
          v-model="data.equip"
          :class="{ 'has-val': data.equip }"
          class="input100"
          type="text"
        />
        <span
          class="focus-input100"
          data-placeholder="Equipamento / Linha"
        ></span>
      </div>

      <div class="wrap-input100 validate-input">
        <input
          v-model="data.description"
          :class="{ 'has-val': data.description }"
          class="input100"
          type="text"
        />
        <span
          class="focus-input100"
          data-placeholder="Descrição da Atividade"
        ></span>
      </div>

      <div class="wrap-input100 validate-input">
        <input
          v-model="data.epis"
          :class="{ 'has-val': data.epis }"
          class="input100"
          type="text"
        />

        <!-- <input id="capacete" v-model="data.epi" type="checkbox" value="1" >
        <label for="capacete">Capacete</label>

        <input id="botina" v-model="data.epi" type="checkbox" value="2" >
        <label for="Botina">botina</label> -->

        <span
          class="focus-input100"
          data-placeholder="Equipamento de proteção (EPIs ou EPCs)"
        >
        </span>
      </div>
    </form>
    <div class="container-login100-form-btn">
      <button class="login100-form-btn" @click="getEpis">EPIs Padrão</button>
      <button class="login100-form-btn" @click="next">Avançar</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { aprs, gerais } from '@/store'
import { APR } from '~/models'

export default Vue.extend({
  data() {
    return {
      data: {
        local: '',
        equip: '',
        description: '',
        epis: ''
      } as APR,
      single: {} as APR,
      alert: false
    }
  },

  watch: {
    single(val) {
      this.data = { ...val }
    }
  },

  mounted() {
    this.single = aprs.$single
  },

  methods: {
    next() {
      if (
        this.data.local.length > 2 &&
        this.data.equip.length > 2 &&
        this.data.description.length > 2 &&
        this.data.epis.length > 2
      ) {
        aprs.setApr(this.data)
        gerais.index('MakeAprRiscos')
      }
      else {
        this.alert = true
      }
    },
    getEpis() {
      const data: APR = {
        local: this.data.local,
        equip: this.data.equip,
        description: this.data.description,
        epis: 'lista padrao'
      }
      aprs.setApr(data)
      this.single = aprs.$single
    }
  }
})
</script>

<style lang="scss" scoped>
.releases {
  display: grid;
  grid-gap: 1.3rem;
  h2 {
    font-size: 1.375rem;
    font-weight: 500;
    color: color(dark, darkest);
  }
}
.alert {
  color: red!important;
}

.login100-form {
  width: 100%;
}

.login100-form-title {
  display: block;
  font-family: Poppins-Bold;
  font-size: 26px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
}

.wrap-input100 {
  width: 100%;
  position: relative;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 30px;
}

.input100 {
  font-family: Poppins-SemiBold;
  font-size: 18px;
  color: #555555;
  line-height: 1.2;

  display: block;
  width: 100%;
  height: 52px;
  background: transparent;
  padding: 0 5px;
}

/*---------------------------------------------*/
.focus-input100 {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
}

.focus-input100::before {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  background: #57b846;
}

.focus-input100::after {
  font-family: Poppins-Medium;
  font-size: 18px;
  color: #999999;
  line-height: 1.2;

  content: attr(data-placeholder);
  display: block;
  width: 100%;
  position: absolute;
  top: 15px;
  left: 0px;
  padding-left: 5px;

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.input100:focus + .focus-input100::after {
  top: -20px;
  font-size: 15px;
}

.input100:focus + .focus-input100::before {
  width: 100%;
}

.has-val.input100 + .focus-input100::after {
  top: -20px;
  font-size: 15px;
}

.has-val.input100 + .focus-input100::before {
  width: 100%;
}

/*------------------------------------------------------------------
[ Button ]*/
.container-login100-form-btn {
  width: 50px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
}

.login100-form-btn {
  font-family: Montserrat-Regular;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  text-transform: uppercase;
  margin: 10px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100px;
  height: 50px;
  background-color: #57b846;
  border-radius: 25px;

  box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(87, 184, 70, 0.5);

  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
}

.login100-form-btn:hover {
  background-color: #333333;
  box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -moz-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -webkit-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -o-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
  -ms-box-shadow: 0 10px 30px 0px rgba(51, 51, 51, 0.5);
}

.validate-input {
  position: relative;
}
</style>
