package main

import (
    "net/http"
    "html/template"
)

func handler(w http.ResponseWriter, r *http.Request) {
    t, _ := template.ParseFiles("hello.tpl.html")
    varmap := map[string]interface{}{
        "name": "Joe",
    }
    t.Execute(w, varmap)
}
func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}