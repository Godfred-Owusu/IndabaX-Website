

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const closeModalBtnFooter = document.getElementById('closeModalBtnFooter');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');

    const openModal = () => {
        modal.classList.remove('hidden');
        modal.classList.remove('opacity-0');
        modal.classList.add('flex');
        setTimeout(() => {
            modalContent.classList.remove('translate-x-full');
        }, 10);
    };

    const closeModal = () => {
        modalContent.classList.add('translate-x-full');
        modal.classList.add('opacity-0');
        modalContent.addEventListener('transitionend', () => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, { once: true });
    };

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    closeModalBtnFooter.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });
});
