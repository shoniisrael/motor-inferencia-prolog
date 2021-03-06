Vue.component('editor', {
  data() {
    return {
      code: String,
      title: "Editor de código",
    }
  },
  created() {
    this.code = "Escribe las reglas aquí";
  },
  methods: {
    highlighter(code) {
      return Prism.highlight(code, Prism.languages.prolog, "prolog");
    }
  },
});


Vue.component('consulta', {
  props: {
    rules: String,
  },
  data() {
    return {
      query: String,
      title: "Consultas",
    }
  },
  created() {
    this.query = "Escribe la consulta aquí";
  },
  methods: {
    highlighter(query) {
      return Prism.highlight(query, Prism.languages.prolog, "prolog");
    },
    submitData() {
      // TODO: Aqui vamos a hacer la peticion post para enviar los datos
      // al api
      // axios.post(URL, data).then();

      let res = this.rules + this.query;
      this.$emit('response', res);
    }
  },
});


Vue.component('respuesta', {
  props: {
    response: String
  },
  data() {
    return {
      title: "Respuesta",
    }
  },
  methods: {
    highlighter(response) {
      return Prism.highlight(response, Prism.languages.prolog, "prolog");
    }
  },
});


let app = new Vue({
  el: '#app',
  data: {
    code: '',
    res: '',
  },
  methods: {
    editor(code) {
      this.code = code
    },
    setResponse(res) {
      this.res = res
    },
  },
})