import React, { useEffect } from 'react'

const Scripts: React.FC = () => {
    useEffect(() => {
        // Array of script sources with paths relative to the public directory
        const scriptSources = [
            '/js/jquery-3.7.1.min.js',
            '/js/jquery-migrate-3.4.1.min.js',
            '/js/modernizr-2.6.2.min.js',
            '/js/imagesloaded.pkgd.min.js',
            '/js/jquery.isotope.v3.0.2.js',
            '/js/popper.min.js',
            '/js/bootstrap.min.js',
            '/js/scrollIt.min.js',
            '/js/jquery.waypoints.min.js',
            '/js/owl.carousel.min.js',
            '/js/jquery.stellar.min.js',
            '/js/jquery.magnific-popup.js',
            '/js/select2.js',
            '/js/datepicker.js',
            '/js/YouTubePopUp.js',
            '/js/custom.js',
        ]

        // Function to dynamically load a script
        const loadScript = (src: string) => new Promise((resolve, reject) => {
                const script = document.createElement('script')
                script.src = src
                script.async = true
                script.onload = () => resolve(true)
            // eslint-disable-next-line prefer-promise-reject-errors
                script.onerror = () => reject(false)
                document.body.appendChild(script)
            })

        // Load all scripts after components have fully rendered
        const loadAllScripts = async () => {
            for (const src of scriptSources) {
                try {
                    await loadScript(src)
                    console.log(`${src} loaded successfully.`)
                } catch {
                    console.error(`Failed to load ${src}.`)
                }
            }
        }

        // Ensure scripts are loaded after the browser has painted
        window.requestAnimationFrame(() => {
            loadAllScripts()
        })

        // Cleanup function to remove scripts when component unmounts
        return () => {
            scriptSources.forEach((src) => {
                const script = document.querySelector(`script[src="${src}"]`)
                if (script) {
                    script.remove()
                }
            })
        }
    }, []) // Empty dependency array ensures this runs only once

    return null // This component does not render anything visually
}

export default Scripts
