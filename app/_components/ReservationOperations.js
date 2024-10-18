"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";

function ReservationOperations() {
  return (
    <div className="flex-none flex flex-col border-l font-semibold border-primary-800 text-sm text-primary-300">
      <button className="flex gap-3 items-center px-4 py-4 basis-1/2 transition-colors duration-200 hover:bg-accent-700 hover:text-primary-950">
        <PencilIcon width={14} />
        EDIT
      </button>
      <Modal>
        <Modal.Open>
          <div className="border-t border-primary-800 flex gap-3 items-center px-4 py-4 basis-1/2 transition-colors duration-200 hover:bg-accent-700 hover:text-primary-950">
            <TrashIcon width={14} />
            DELETE
          </div>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default ReservationOperations;
