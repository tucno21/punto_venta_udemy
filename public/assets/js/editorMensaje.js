let mensajeEmpresa = document.getElementById("mensajeEmpresa");

if (mensajeEmpresa) {
  ClassicEditor.create(mensajeEmpresa, {
    toolbar: {
      items: [
        "exportPDF",
        "exportWord",
        "|",
        "findAndReplace",
        "selectAll",
        "|",
        "heading",
        "|",
        "bold",
        "italic",
        "strikethrough",
        "underline",
        "code",
        "subscript",
        "superscript",
        "removeFormat",
        "|",
        "bulletedList",
        "numberedList",
        "todoList",
        "|",
        "outdent",
        "indent",
        "|",
        "undo",
        "redo",
        "-",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "highlight",
        "|",
        "alignment",
        "|",
        "link",
        "insertImage",
        "blockQuote",
        "insertTable",
        "codeBlock",
        "htmlEmbed",
        "|",
        "specialCharacters",
        "horizontalLine",
        "pageBreak",
        "|",
        "textPartLanguage",
        "|",
        "sourceEditing",
      ],
      shouldNotGroupWhenFull: true,
    },
  }).catch((error) => {
    console.error(error);
  });
}
