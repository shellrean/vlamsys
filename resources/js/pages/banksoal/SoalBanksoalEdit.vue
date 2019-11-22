<template>
  <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                  <router-link :to="{ name: 'banksoal.soal', params: { 'banksoal_id' : $route.params.banksoal_id } }" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
                  <b-button variant="success" squared size="sm" class="float-right" :disabled="isLoading" @click.prevent="postSoalBanksoal">
                    <b-spinner small type="grow" v-show="isLoading"></b-spinner>
                    Simpan
                  </b-button>
                </div>
                <div class="card-body">
                  <div class="editor">
                  <!--   <editor-floating-menu :editor="question" v-slot="{ commands, isActive, menu }">
                      <div
                        class="editor__floating-menu"
                        :class="{ 'is-active': menu.isActive }"
                        :style="`top: ${menu.top}px`"
                      >

                        <button
                          class="menubar__button btn btn-sm btn-dark rounded-0"
                          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                          @click="commands.heading({ level: 1 })"
                        >
                          H1
                        </button>

                        <button
                          class="menubar__button btn btn-dark rounded-0"
                          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                          @click="commands.heading({ level: 2 })"
                        >
                          H2
                        </button>

                        <button
                          class="menubar__button btn btn-dark rounded-0"
                          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                          @click="commands.heading({ level: 3 })"
                        >
                          H3
                        </button>
                      </div>
                    </editor-floating-menu> -->
                    <h4>Pertanyaan</h4>
                    <hr>
                    <editor-content class="editor__content" :editor="question" />

                    <hr>
                    <br><br>
                    <h4>Pilihan</h4>
                    <!-- <hr> -->
                    <table class="table">
                      <tr>
                        <td width="10px">
                          <b-form-radio name="correct" size="lg" value="a" v-model="correct"></b-form-radio>
                        </td>
                        <td>
                          <editor-content class="editor__content" :editor="contenta" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b-form-radio name="correct" size="lg" value="b" v-model="correct"></b-form-radio>
                        </td>
                        <td>
                          <editor-content class="editor__content" :editor="contentb" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b-form-radio name="correct" size="lg" value="c" v-model="correct"></b-form-radio>
                        </td>
                        <td>
                          <editor-content class="editor__content" :editor="contentc" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b-form-radio name="correct" size="lg" value="d" v-model="correct"></b-form-radio>
                        </td>
                        <td>
                          <editor-content class="editor__content" :editor="contentd" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="card-footer">

                </div>
              </div>
            </div>
          </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import { Editor, EditorContent, EditorFloatingMenu } from 'tiptap'
import {
  Blockquote,
  BulletList,
  CodeBlock,
  HardBreak,
  Heading,
  ListItem,
  OrderedList,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  History,
  Placeholder,
} from 'tiptap-extensions'
export default {
  created() {
    this.getDataSoal()
  },
  components: {
    EditorContent,
    EditorFloatingMenu,
  },
  data() {
    return {
      correct: '',
      question: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pertanyaan …',
            showOnlyWhenEditable: true,
          }),
        ],
        content: '',
      }),
      contenta: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pilihan 1 …',
            showOnlyWhenEditable: true,
          }),
        ],
        content: '',
      }),
      contentb: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pilihan 2 …',
            showOnlyWhenEditable: true,
          }),
        ],
        content: '',
      }),
      contentc: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pilihan 3…',
            showOnlyWhenEditable: true,
          }),
        ],
        content: '',
      }),
      contentd: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pilihan 4…',
            showOnlyWhenEditable: true,
          }),
        ],
        content: '',
      })
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapState(['errors'])
  },
  methods: {
    ...mapActions('banksoal',['addSoalBanksoal']),
    ...mapActions('soal',['editSoalBanksoal']),
    ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
    getDataSoal() {
      this.editSoalBanksoal(this.$route.params.soal_id)
      .then((response) => {
        this.question.setContent(response.data.pertanyaan)
        this.contenta.setContent(response.data.jawabans[0].text_jawaban)
        this.contentb.setContent(response.data.jawabans[1].text_jawaban)
        this.contentc.setContent(response.data.jawabans[2].text_jawaban)
        this.contentd.setContent(response.data.jawabans[3].text_jawaban)
      })
    },
    postSoalBanksoal() {
      if (this.correct == '') {
        this.$swal({
                title: 'Kunci jawaban kosong',
                text: "Pilih jawaban yang benar",
                type: 'warning',
            })
        return
      }
      else {
        this.addSoalBanksoal({
        pertanyaan: this.question.getHTML(),
        banksoal_id: this.$route.params.banksoal_id,
        pilihan1: this.contenta.getHTML(),
        pilihan2: this.contentb.getHTML(),
        pilihan3: this.contentc.getHTML(),
        pilihan4: this.contentd.getHTML(),
        correct: this.correct
      })
      .then((data) => {
        this.$notify({
          group: 'foo',
          title: 'Sukses',
          type: 'success',
          text: 'Soal berhasil ditambah.'
        }),
        this.clearForm()
      })
      }
      
    },
    clearForm() {
      this.question.setContent(''),
      this.contenta.setContent(''),
      this.contentb.setContent(''),
      this.contentc.setContent(''),
      this.contentd.setContent(''),
      this.correct = ''
    }
  }
}
</script>

<style lang="scss">
.editor {
  position: relative;
  &__floating-menu {
    position: absolute;
    z-index: 1;
    margin-top: -0.25rem;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    &.is-active {
      opacity: 1;
      visibility: visible;
      margin-left: 30px;
    }
  }
}
.editor p.is-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
</style>