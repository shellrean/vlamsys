<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="card">
        <div class="card-header">
          <router-link :to="{ name: 'banksoal.soal', params: { 'banksoal_id' : $route.params.banksoal_id } }" class="btn btn-warning btn-sm rounded-0">Kembali</router-link>
        </div>
        <div class="card-body">
            <div class="card">
              <div class="card-header">
                <b>Setting soal</b>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label>Tipe soal</label>
                      <select class="form-control" v-model="tipe_soal">
                        <option value="1">Pilihan ganda</option>
                        <option value="2">Essai</option>
                      </select>
                    </div>
                    <div class="form-group" v-if="audio == ''">
                      <label>File audio</label>
                      <div class="input-group">
                        <div class="custom-file">
                          <input type="file" class="custom-file-input" @change="handleFileUpload">
                          <label class="custom-file-label">{{ labelAudio ? labelAudio : 'Pilih File...' }}</label>
                        </div>
                        <div class="input-group-append">
                          <button class="btn btn-outline-dark" type="button" @click="submitFile">Upload</button>
                        </div>
                      </div>
                    </div>
                    <div class="form-group" v-if="audio != ''">
                      <label>File audio</label>
                      <div class="input-group">
                        <b-button size="sm" variant="danger" @click="removeAudio"><font-awesome-icon icon="times" /></b-button><audio-player :file="'/storage/audio/'+audio"></audio-player>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                   
                  </div>
                </div>
              </div>
            </div>
          <div class="card">
            <div class="card-header">
              <b>Pertanyaan</b>
            </div>
            <div class="card-body">
              <div class="editor">
                <editor-menu-bar :editor="question" v-slot="{ commands, isActive }">
                  <div class="menubar">
                    <button
                      class="menubar__button"
                      @click="showImagePrompt(commands.image)"
                    >
                      <font-awesome-icon icon="image" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.bold() }"
                      @click="commands.bold"
                    >
                      <font-awesome-icon icon="bold" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.italic() }"
                      @click="commands.italic"
                    >
                      <font-awesome-icon icon="italic" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.strike() }"
                      @click="commands.strike"
                    >
                      <font-awesome-icon icon="strikethrough" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.underline() }"
                      @click="commands.underline"
                    >
                      <font-awesome-icon icon="underline" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.paragraph() }"
                      @click="commands.paragraph"
                    >
                      <font-awesome-icon icon="paragraph" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                      @click="commands.heading({ level: 1 })"
                    >
                      H1
                    </button>

                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                      @click="commands.heading({ level: 2 })"
                    >
                      H2
                    </button>

                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                      @click="commands.heading({ level: 3 })"
                    >
                      H3
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.bullet_list() }"
                      @click="commands.bullet_list"
                    >
                      <font-awesome-icon icon="list" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.ordered_list() }"
                      @click="commands.ordered_list"
                    >
                      <font-awesome-icon icon="list-ol" />
                    </button>
                    <button
                      class="menubar__button"
                      :class="{ 'is-active': isActive.blockquote() }"
                      @click="commands.blockquote"
                    >
                      <font-awesome-icon icon="quote-right" />
                    </button>
                    <button
                      class="menubar__button"
                      @click="commands.undo"
                    >
                      <font-awesome-icon icon="undo" />
                    </button>

                    <button
                      class="menubar__button"
                      @click="commands.redo"
                    >
                      <font-awesome-icon icon="redo" />
                    </button>
                  </div>
                </editor-menu-bar>
                <editor-content class="editor__content" :editor="question" />
              </div>
            </div>
          </div>
          <div class="card" v-if="tipe_soal == 1">
            <div class="card-header">
              <b>Pilihan</b>
            </div>
            <div class="card-body">
              <div class="editor">
              <table class="table table-borderless">
                <tr v-for="(pilih, index) in pilihan">
                  <td width="10px">
                    <b-form-radio name="correct" size="lg" :value="index" v-model="correct"><span class="text-uppercase">{{ index | charIndex }}</span></b-form-radio>
                  </td>
                  <td>
                    <editor-menu-bar :editor="pilihan[index]" v-slot="{ commands, isActive }">
                    <div class="menubar">
                      <button
                        class="menubar__button"
                        @click="showImagePrompt(commands.image)"
                      >
                        <font-awesome-icon icon="image" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                      >
                        <font-awesome-icon icon="bold" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                      >
                        <font-awesome-icon icon="italic" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.strike() }"
                        @click="commands.strike"
                      >
                        <font-awesome-icon icon="strikethrough" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.underline() }"
                        @click="commands.underline"
                      >
                        <font-awesome-icon icon="underline" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.paragraph() }"
                        @click="commands.paragraph"
                      >
                        <font-awesome-icon icon="paragraph" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                      >
                        H1
                      </button>

                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                      >
                        H2
                      </button>

                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click="commands.heading({ level: 3 })"
                      >
                        H3
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                      >
                        <font-awesome-icon icon="list" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                      >
                        <font-awesome-icon icon="list-ol" />
                      </button>
                      <button
                        class="menubar__button"
                        :class="{ 'is-active': isActive.blockquote() }"
                        @click="commands.blockquote"
                      >
                        <font-awesome-icon icon="quote-right" />
                      </button>
                      <button
                        class="menubar__button"
                        @click="commands.undo"
                      >
                        <font-awesome-icon icon="undo" />
                      </button>

                      <button
                        class="menubar__button"
                        @click="commands.redo"
                      >
                        <font-awesome-icon icon="redo" />
                      </button>
                    </div>
                    </editor-menu-bar>
                    <editor-content class="editor__content" :editor="pilihan[index]" />
                  </td>
                </tr>
              </table>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <b-button variant="success" squared size="sm" :disabled="isLoading" @click.prevent="postSoalBanksoal">
            <b-spinner small type="grow" v-show="isLoading"></b-spinner>
            Simpan
          </b-button>
        </div>
      </div>
    </div>
    <b-modal id="modal-scoped" hide-backdrop size="xl">
        <template v-slot:modal-header="{ close }">
          <h5>Pilih gambar</h5>
        </template>
        <div class="row">
          <div class="col-md-4">
            <img :src="gambar_pilih" style="max-width: 100%"> <br> <br>
            <b-button size="sm" v-show="gambar_pilih != ''" variant="primary" squared @click="masukGambar">Masukkan gambar</b-button>
          </div>
          <div class="col-md-8">
            <div class="form-group">
              <label>Direktori</label>
              <select class="form-control" v-model="direktory">
                <option value="">Pilih direktori</option>
                <option :value="directorie.id" v-for="directorie in directories" v-text="directorie.name"></option>
              </select>
            </div>
            
            <table class="table table-striped table-hover table-bordered">
              <tr>
                <td>Nama file</td>
                <td>View</td>
                <td>Aksi</td>
              </tr>
              <tr v-for="(content,index) in contentDirectory.data">
                <td><a class="text-info" v-text="content.filename"></a></td>
                <td>
                  <img :src="'http://192.168.0.200/storage/'+content.dirname+'/'+content.filename" class="img-thumbnail rounded-0" style="max-width: 100px">
                </td>
                <td>
                  <b-button variant="light" squared @click="pilihGambar(index)">
                    Lihat
                  </b-button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <template v-slot:modal-footer="{cancel}">
          <b-button size="sm" variant="secondary" @click="cancel()">
            Tutup
          </b-button>
        </template>
    </b-modal>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from 'vuex'
import { Editor, EditorContent, EditorFloatingMenu,EditorMenuBar } from 'tiptap'
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
  Strike,
  Underline,
  History,
  Placeholder,
  Image,
} from 'tiptap-extensions'
import AudioPlayer from '../../components/AudioPlayer.vue'
export default {
  created() {
    this.getBanksoal(this.$route.params.banksoal_id)
    this.getDirectories()
    this.getContentFile()
    this.getDataSoal()
  },
  components: {
    EditorContent,
    EditorFloatingMenu,
    EditorMenuBar,
    AudioPlayer
  },
  data() {
    return {
      correct: '',
      question : new Editor({
        extensions: [
          new Blockquote(),
          new Image(),
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
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyNodeClass: 'is-empty',
            emptyNodeText: 'Tulis pertanyaan …',
            showOnlyWhenEditable: true,
          })
        ],
        content: ''
      }),
      pilihan: [],
      jmlh_pilihan: '',
      gambar_pilih: '',
      command: '',
      direktory: '',
      tipe_soal: 1,
      data_soal: '',
      audio: '',
      fileAudio: '',
      labelAudio: ''
    }
  },
  filters: {
		charIndex(i) {
			return String.fromCharCode(97 + i)
		}
	},
  computed: {
    ...mapGetters(['isLoading']),
    ...mapState(['errors']),
    ...mapState('banksoal',{
      banksoal: state => state.banksoal.data
    }),
    ...mapState('filemedia', {
      contentDirectory: state => state.contentFilemedia,
      directories: state => state.directories.data
    })
  },
  methods: {
    ...mapActions('filemedia', ['getContentFilemedia','getDirectories','uploadFileAudio']),
    ...mapActions('soal',['editSoalBanksoal']),
    ...mapActions('banksoal',['updateSoalBanksoal','getBanksoal']),
    ...mapMutations(['CLEAR_ERRORS','SET_LOADING']),
    getDataSoal() {
      this.editSoalBanksoal(this.$route.params.soal_id)
      .then((response) => {
        this.question.setContent(response.data.pertanyaan)
        this.data_soal = response.data.jawabans,
        this.audio = (response.data.audio != null ? response.data.audio : '')
      })
    },
    postSoalBanksoal() {
      if (this.correct == null) {
        this.$swal({
          title: 'Kunci jawaban kosong',
          text: "Pilih jawaban yang benar",
          type: 'warning',
        })
        return
      }
      else {
        this.SET_LOADING(true)
        let sender = []
        this.pilihan.forEach(function(item) {
          sender.push(item.getHTML())
        })
        this.updateSoalBanksoal({
          pertanyaan: this.question.getHTML(),
          banksoal_id: this.$route.params.banksoal_id,
          pilihan: sender,
          correct: this.correct,
          tipe_soal: this.tipe_soal,
          soal_id: this.$route.params.soal_id,
          audio: this.audio
        })
        .then((data) => {
          this.$notify({
            group: 'foo',
            title: 'Sukses',
            type: 'success',
            text: 'Soal berhasil diubah.'
          }),
          this.SET_LOADING(false)
          this.$router.push({ name: 'banksoal.soal', params: {banksoal_id: this.$route.params.banksoal_id} })
        })
      }
    },
    clearForm() {
      this.question.setContent(''),
      this.correct = '',
      this.pilihan.forEach(function(item) {
        item.setContent('')
      })
    },
    initEditor() {
      this.data_soal.forEach((item,index) => {
        let pilihan = new Editor({
          extensions: [
            new Blockquote(),
            new Image(),
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
            new Strike(),
            new Underline(),
            new History(),
            new Placeholder({
              emptyNodeClass: 'is-empty',
              emptyNodeText: `Tulis pilihan${index+1} …`,
              showOnlyWhenEditable: true,
            })
          ],
          content: item.text_jawaban
        })
        if(item.correct == "1") {
          this.correct = index
        }
        this.pilihan.push(pilihan)
      })
    },
    showImagePrompt(command) {
      this.$bvModal.show('modal-scoped')
      this.command = command
    },
    onSelectImage(e) {

    },
    pilihGambar(index) {
      const gambar = this.contentDirectory.data[index]
      this.gambar_pilih = 'http://192.168.0.200/storage/'+gambar.dirname+'/'+gambar.filename
    },
    masukGambar() {
      const command = this.command
      const src = this.gambar_pilih
      command({ src })
    },
    getContentFile() {
      if(this.direktory != '') {
        this.getContentFilemedia(this.direktory)
      }
    },
    handleFileUpload(e) {
      this.labelAudio = e.target.files[0].name
      this.fileAudio = e.target.files[0];
    },
    submitFile(){
      let formData = new FormData();
      formData.append('file', this.fileAudio);
      this.uploadFileAudio(formData)
      .then((res) => {
        this.audio = res.data
        this.fileAudio = ''
        this.labelAudio = ''
      })
    },
    removeAudio() {
      this.audio = ''
    }
  },
  watch: {
    banksoal(val) {
      this.jmlh_pilihan = val.jumlah_pilihan
    },
    data_soal() {
      this.initEditor()
    },
    direktory(val) {
      if(val != '') {
        this.getContentFilemedia(val)
      }
    }
  }
}
</script>
<style lang="scss">
.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.menubar {

  margin-bottom: 1rem;
  transition: visibility 0.2s 0.4s, opacity 0.2s 0.4s;

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }

  &.is-focused {
    visibility: visible;
    opacity: 1;
    transition: visibility 0.2s, opacity 0.2s;
  }

  &__button {
    font-weight: bold;
    display: inline-flex;
    background: transparent;
    border: 0;
    color: #000000;
    padding: 0.2rem 0.5rem;
    margin-right: 0.2rem;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
      background-color: rgba(#000000, 0.05);
    }

    &.is-active {
      background-color: rgba(#000000, 0.1);
    }
  }

  span#{&}__button {
    font-size: 13.3333px;
  }
}
</style>