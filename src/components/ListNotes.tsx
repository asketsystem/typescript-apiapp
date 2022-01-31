import React from "react";
import { Note } from "../models/note.model";
import Notes from './Notes'

interface IListNotesProps {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const ListNotes: React.FC<IListNotesProps> = ({ notes }) => {

    return (
        <>
            <h2 className="mt-4">Notes</h2>
            <div>{notes.map(note => <Notes key={note.id} note={note} /> )}</div>
        </>
    );
};

export default ListNotes;