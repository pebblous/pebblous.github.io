// ============================================================
// Modal Factory Pattern
// ============================================================

(function() {
    const MODAL_CONFIGS = {
        aadsModal: {
            id: 'aadsModal',
            title: 'AADS: 자율형 AI 데이터 과학자 시뮬레이션',
            iframeSrc: 'project/AADS/aads-sim-inline.html',
            maxWidth: 'max-w-4xl',
            height: 'h-[80vh]',
            layout: 'standard'
        },
        investorModal: {
            id: 'investorModal',
            title: '데이터 스토리: 페블러스 최적 글로벌 투자사 분석',
            iframeSrc: 'event/2025/InvestKoreaSummit/index.html',
            maxWidth: 'max-w-6xl',
            height: 'h-[90vh]',
            layout: 'standard'
        },
        orderVsFreedomModal: {
            id: 'orderVsFreedomModal',
            title: 'Order vs Freedom',
            iframeSrc: 'project/DAL/order vs freedom.html',
            maxWidth: 'max-w-6xl',
            height: 'h-[95vh]',
            layout: 'fullscreen'
        },
        pendulumModal: {
            id: 'pendulumModal',
            title: 'Pendulum, Particles and Pebbles',
            iframeSrc: 'project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-01.html',
            maxWidth: 'max-w-6xl',
            height: 'h-[95vh]',
            layout: 'fullscreen'
        },
        pendulum02Modal: {
            id: 'pendulum02Modal',
            title: 'Pendulum, Particles and Pebbles',
            iframeSrc: 'project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-02.html',
            maxWidth: 'max-w-6xl',
            height: 'h-[95vh]',
            layout: 'fullscreen'
        },
        pendulum03Modal: {
            id: 'pendulum03Modal',
            title: 'Pendulum, Particles and Pebbles',
            iframeSrc: 'project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-03.html',
            maxWidth: 'max-w-6xl',
            height: 'h-[95vh]',
            layout: 'fullscreen'
        }
    };

    class ModalFactory {
        constructor(configs) {
            this.configs = configs;
            this.modals = {};
            this.init();
        }

        init() {
            const container = document.getElementById('modals-container');

            Object.values(this.configs).forEach(config => {
                const modal = this.createModal(config);
                container.appendChild(modal);
                this.modals[config.id] = modal;
            });

            this.setupEventListeners();
        }

        createModal(config) {
            const modal = document.createElement('div');
            modal.id = config.id;
            modal.className = 'modal fixed inset-0 bg-black/60 z-50 items-center justify-center p-4';
            modal.setAttribute('role', 'dialog');
            modal.setAttribute('aria-labelledby', `${config.id}-title`);
            modal.setAttribute('aria-hidden', 'true');

            if (config.layout === 'fullscreen') {
                modal.innerHTML = `
                    <div class="w-full ${config.maxWidth} ${config.height} bg-slate-900 rounded-lg shadow-2xl flex flex-col overflow-hidden relative">
                        <button onclick="closeModal('${config.id}')" class="absolute top-4 right-4 z-10 text-slate-400 hover:text-white text-3xl bg-slate-900/80 rounded-full w-10 h-10 flex items-center justify-center" aria-label="Close modal">&times;</button>
                        <div class="w-full h-full">
                            <iframe data-src="${config.iframeSrc}" class="w-full h-full border-0"></iframe>
                        </div>
                    </div>
                `;
            } else {
                modal.innerHTML = `
                    <div class="w-full ${config.maxWidth} ${config.height} bg-slate-900 rounded-lg shadow-2xl flex flex-col">
                        <div class="flex-shrink-0 p-4 border-b border-slate-800 flex justify-between items-center">
                            <h3 id="${config.id}-title" class="text-lg font-semibold text-white">${config.title}</h3>
                            <button onclick="closeModal('${config.id}')" class="text-slate-400 hover:text-white text-2xl" aria-label="Close modal">&times;</button>
                        </div>
                        <div class="flex-grow p-0 overflow-hidden">
                            <iframe data-src="${config.iframeSrc}" class="w-full h-full border-0"></iframe>
                        </div>
                    </div>
                `;
            }

            return modal;
        }

        setupEventListeners() {
            window.addEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    Object.keys(this.modals).forEach(id => closeModal(id));
                }
            });

            Object.keys(this.modals).forEach(id => {
                const modal = this.modals[id];
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        closeModal(id);
                    }
                });
            });
        }
    }

    // Initialize Modal Factory
    const modalFactory = new ModalFactory(MODAL_CONFIGS);

    // Global Modal API (with lazy iframe loading)
    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            const iframe = modal.querySelector('iframe[data-src]');
            if (iframe && !iframe.src) {
                iframe.src = iframe.dataset.src;
            }
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = 'auto';
            const iframe = modal.querySelector('iframe');
            if (iframe && iframe.src) {
                iframe.src = '';
            }
        }
    };
})();
