// ===================================
// PRESENTACIÓN DIRECTORIO DE TALENTOS
// BOB-A-THON 2026
// ===================================

class Presentation {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.slideCounter = document.getElementById('slide-counter');
        this.progressFill = document.getElementById('progress-fill');
        
        this.init();
    }

    init() {
        // Event listeners para botones
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Event listeners para teclado
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Actualizar UI inicial
        this.updateUI();

        // Prevenir scroll accidental
        document.addEventListener('wheel', (e) => {
            if (Math.abs(e.deltaY) > 50) {
                e.preventDefault();
                if (e.deltaY > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        }, { passive: false });

        // Touch events para móviles
        this.setupTouchEvents();

        console.log('✅ Presentación inicializada');
        console.log(`📊 Total de slides: ${this.totalSlides}`);
    }

    goToSlide(index) {
        if (index < 0 || index >= this.totalSlides) return;

        // Remover clase active del slide actual
        this.slides[this.currentSlide].classList.remove('active');

        // Actualizar índice
        this.currentSlide = index;

        // Agregar clase active al nuevo slide
        this.slides[this.currentSlide].classList.add('active');

        // Actualizar UI
        this.updateUI();

        // Log para debugging
        console.log(`📍 Slide ${this.currentSlide + 1}/${this.totalSlides}`);
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    previousSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    updateUI() {
        // Actualizar contador
        this.slideCounter.textContent = `${this.currentSlide + 1} / ${this.totalSlides}`;

        // Actualizar barra de progreso
        const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
        this.progressFill.style.width = `${progress}%`;

        // Actualizar estado de botones
        this.prevBtn.disabled = this.currentSlide === 0;
        this.nextBtn.disabled = this.currentSlide === this.totalSlides - 1;

        // Actualizar título de la página
        const slideTitle = this.slides[this.currentSlide].querySelector('h1, h2');
        if (slideTitle) {
            document.title = `${slideTitle.textContent} - Directorio de Talentos`;
        }
    }

    handleKeyPress(e) {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            
            case 'ArrowLeft':
            case 'PageUp':
                e.preventDefault();
                this.previousSlide();
                break;
            
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
            
            case 'f':
            case 'F':
                e.preventDefault();
                this.toggleFullscreen();
                break;
            
            case 'Escape':
                if (document.fullscreenElement) {
                    document.exitFullscreen();
                }
                break;
            
            // Números para ir a slide específico
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                const slideNum = parseInt(e.key) - 1;
                if (slideNum < this.totalSlides) {
                    this.goToSlide(slideNum);
                }
                break;
        }
    }

    setupTouchEvents() {
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }

    handleSwipe(startX, endX) {
        const swipeThreshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next slide
                this.nextSlide();
            } else {
                // Swipe right - previous slide
                this.previousSlide();
            }
        }
    }

    toggleFullscreen() {
        const container = document.querySelector('.presentation-container');
        
        if (!document.fullscreenElement) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            }
            console.log('🖥️ Modo pantalla completa activado');
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            console.log('🖥️ Modo pantalla completa desactivado');
        }
    }

    // Método para exportar como PDF (requiere print)
    print() {
        window.print();
    }

    // Método para obtener información del slide actual
    getCurrentSlideInfo() {
        const slide = this.slides[this.currentSlide];
        return {
            index: this.currentSlide,
            total: this.totalSlides,
            id: slide.id,
            background: slide.getAttribute('data-background')
        };
    }
}

// ===================================
// UTILIDADES ADICIONALES
// ===================================

// Timer para presentación automática (opcional)
class AutoPlayTimer {
    constructor(presentation, interval = 5000) {
        this.presentation = presentation;
        this.interval = interval;
        this.timerId = null;
        this.isPlaying = false;
    }

    start() {
        if (this.isPlaying) return;
        
        this.isPlaying = true;
        this.timerId = setInterval(() => {
            if (this.presentation.currentSlide < this.presentation.totalSlides - 1) {
                this.presentation.nextSlide();
            } else {
                this.stop();
            }
        }, this.interval);
        
        console.log('▶️ Auto-play iniciado');
    }

    stop() {
        if (!this.isPlaying) return;
        
        clearInterval(this.timerId);
        this.isPlaying = false;
        console.log('⏸️ Auto-play detenido');
    }

    toggle() {
        if (this.isPlaying) {
            this.stop();
        } else {
            this.start();
        }
    }
}

// ===================================
// INICIALIZACIÓN
// ===================================

let presentation;
let autoPlay;

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar presentación
    presentation = new Presentation();

    // Inicializar auto-play (desactivado por defecto)
    autoPlay = new AutoPlayTimer(presentation, 5000);

    // Exponer funciones globales para consola
    window.presentation = presentation;
    window.autoPlay = autoPlay;

    // Mensaje de bienvenida en consola
    console.log('%c🎯 DIRECTORIO DE TALENTOS', 'font-size: 24px; font-weight: bold; color: #2563eb;');
    console.log('%cPresentación BOB-A-THON 2026', 'font-size: 16px; color: #6b7280;');
    console.log('\n📋 Comandos disponibles:');
    console.log('  → / ← : Navegar slides');
    console.log('  F     : Pantalla completa');
    console.log('  ESC   : Salir pantalla completa');
    console.log('  1-9   : Ir a slide específico');
    console.log('  Home  : Primer slide');
    console.log('  End   : Último slide');
    console.log('\n💻 Comandos de consola:');
    console.log('  presentation.goToSlide(n)  : Ir a slide n');
    console.log('  presentation.print()       : Imprimir/PDF');
    console.log('  autoPlay.start()           : Iniciar auto-play');
    console.log('  autoPlay.stop()            : Detener auto-play');
    console.log('  presentation.getCurrentSlideInfo() : Info del slide actual');
});

// ===================================
// PREVENIR CIERRE ACCIDENTAL
// ===================================

window.addEventListener('beforeunload', (e) => {
    if (presentation && presentation.currentSlide > 0) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir de la presentación?';
        return e.returnValue;
    }
});

// ===================================
// MANEJO DE ERRORES
// ===================================

window.addEventListener('error', (e) => {
    console.error('❌ Error en la presentación:', e.error);
});

// ===================================
// ANALYTICS (opcional)
// ===================================

function trackSlideView(slideNumber) {
    // Aquí puedes agregar código para analytics
    // Por ejemplo, Google Analytics, Mixpanel, etc.
    console.log(`📊 Vista de slide: ${slideNumber}`);
}

// ===================================
// EXPORTAR PARA USO EXTERNO
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Presentation, AutoPlayTimer };
}

// Made with Bob
