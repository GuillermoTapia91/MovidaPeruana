import { useState, useEffect } from "react"
import { supabase } from "../../supabase"
import Auth from "../../service/Auth"
import Account from "../../service/Account"
import "./style.css"

export default function SignIn() {




  return (
    <div className="container py-4">
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mi-modal">Abrir modal</button>

    <div className="modal fade" id="mi-modal" data-bs-backdroo="static">
    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Conectate</h5>
                <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor tempora, distinctio dignissimos quasi cumque ducimus ratione numquam inventore, facilis obcaecati dolorum natus et, temporibus accusamus id sed velit! Deserunt!</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-danger" data-bs-dismiss="modal">cancelar</button>
              <button className="btn btn-primary">Guardar</button>
            </div>
        </div>
    </div>
</div>
</div>
  )
}