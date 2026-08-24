import { useState } from 'react'
import type {
  AnimationDefinition,
} from './types'
import {
  resolveAnimationVisual,
} from './VisualContextEngine'

type AnimationRendererProps = {
  animation: AnimationDefinition
  title?: string
  description?: string
  onComplete?: () => void
}

function AnimationRenderer({
  animation,
  title,
  description,
  onComplete,
}: AnimationRendererProps) {
  const [revealed, setRevealed] =
    useState(false)

  const resolvedVisual =
    resolveAnimationVisual(
      animation,
      title,
      description,
    )

  return (
    <section className="edduu-masterclass-experience edduu-masterclass-animation">

      {title && (
        <h3>{title}</h3>
      )}

      {description && (
        <p>{description}</p>
      )}

      {animation.opening && (
        <p>
          {animation.opening}
        </p>
      )}

      {resolvedVisual === 'storage' ? (

        <div className="edduu-storage-visual">

          <div className="edduu-storage-folder-tree">

            <div className="edduu-storage-folder">
              Documents
            </div>

            <div className="edduu-storage-folder nested">
              Projects
            </div>

            <div className="edduu-storage-file">
              plan.txt
            </div>

          </div>

          <div className="edduu-storage-path">
            Documents / Projects / plan.txt
          </div>

        </div>

      ) : resolvedVisual === 'process' ? (

        <div className="edduu-process-visual">

          <div className="edduu-process-stage">
            <strong>PROGRAM</strong>
            <span>
              Stored in storage
            </span>
          </div>

          <div className="edduu-process-arrow">
            &#8595;
          </div>

          <div className="edduu-process-stage">
            <strong>RAM</strong>
            <span>
              Program is loaded into memory
            </span>
          </div>

          <div className="edduu-process-arrow">
            &#8595;
          </div>

          <div className="edduu-process-stage">
            <strong>PROCESS</strong>
            <span>
              The program is now running
            </span>
          </div>

          <div className="edduu-process-arrow">
            &#8595;
          </div>

          <div className="edduu-process-stage">
            <strong>CPU</strong>
            <span>
              CPU executes the instructions
            </span>
          </div>

        </div>

      ) : resolvedVisual === 'network' ? (

        <div className="edduu-network-visual">

          <div className="edduu-network-node">
            <strong>SENDER</strong>
            <span>
              Computer
            </span>
          </div>

          <div className="edduu-network-arrow">
            &#8595;
          </div>

          <div className="edduu-network-data">
            <strong>DATA</strong>
            <span>
              Information being sent
            </span>
          </div>

          <div className="edduu-network-arrow">
            &#8595;
          </div>

          <div className="edduu-network-core">
            <strong>NETWORK</strong>
            <span>
              Communication path between devices
            </span>
          </div>

          <div className="edduu-network-arrow">
            &#8595;
          </div>

          <div className="edduu-network-data">
            <strong>DATA</strong>
            <span>
              Information being delivered
            </span>
          </div>

          <div className="edduu-network-arrow">
            &#8595;
          </div>

          <div className="edduu-network-node">
            <strong>RECEIVER</strong>
            <span>
              Computer
            </span>
          </div>

        </div>

      ) : resolvedVisual === 'internet' ? (

        <div className="edduu-internet-visual">

          <div className="edduu-internet-device">
            <strong>YOUR DEVICE</strong>
            <span>
              Laptop / phone
            </span>
          </div>

          <div className="edduu-internet-arrow">
            &#8595;
          </div>

          <div className="edduu-internet-router">
            <strong>ROUTER</strong>
            <span>
              Connects your local network
            </span>
          </div>

          <div className="edduu-internet-arrow">
            &#8595;
          </div>

          <div className="edduu-internet-isp">
            <strong>ISP</strong>
            <span>
              Internet service provider
            </span>
          </div>

          <div className="edduu-internet-arrow">
            &#8595;
          </div>

          <div className="edduu-internet-cloud">
            <strong>INTERNET</strong>
            <span>
              Interconnected networks
            </span>
          </div>

          <div className="edduu-internet-arrow">
            &#8595;
          </div>

          <div className="edduu-internet-server">
            <strong>REMOTE SERVER</strong>
            <span>
              Provides the requested service
            </span>
          </div>

        </div>

      ) : resolvedVisual === 'web' ? (

        <div className="edduu-web-visual">

          <div className="edduu-web-browser">
            <strong>BROWSER</strong>
            <span>
              Starts the website request
            </span>
          </div>

          <div className="edduu-web-arrow">
            &#8595;
          </div>

          <div className="edduu-web-dns">
            <strong>DNS</strong>
            <span>
              Finds the IP address
            </span>
          </div>

          <div className="edduu-web-arrow">
            &#8595;
          </div>

          <div className="edduu-web-ip">
            <strong>IP ADDRESS</strong>
            <span>
              Identifies the destination
            </span>
          </div>

          <div className="edduu-web-arrow">
            &#8595;
          </div>

          <div className="edduu-web-server">
            <strong>WEB SERVER</strong>
            <span>
              Handles the request
            </span>
          </div>

          <div className="edduu-web-arrow">
            &#8595;
          </div>

          <div className="edduu-web-response">
            <strong>HTTP RESPONSE</strong>
            <span>
              Result travels back to the browser
            </span>
          </div>

        </div>

      ) : resolvedVisual === 'browser-render' ? (

        <div className="edduu-browser-render-visual">

          <div className="edduu-browser-render-flow">

            <div className="edduu-browser-render-source">

              <div className="edduu-browser-render-source-icon">
                &#8593;
              </div>

              <strong>SERVER RESPONSE</strong>

              <span>
                Resources arrive from the server
              </span>

            </div>

            <div className="edduu-browser-render-packet">
              DATA
            </div>

            <div className="edduu-browser-render-resource html">
              HTML
            </div>

            <div className="edduu-browser-render-resource css">
              CSS
            </div>

            <div className="edduu-browser-render-resource javascript">
              JS
            </div>

          </div>

          <div className="edduu-browser-render-browser">

            <div className="edduu-browser-render-browser-bar">

              <span className="edduu-browser-render-dot" />
              <span className="edduu-browser-render-dot" />
              <span className="edduu-browser-render-dot" />

              <div className="edduu-browser-render-address">
                edduu.com
              </div>

            </div>

            <div className="edduu-browser-render-page">

              <div className="edduu-browser-render-processing">
                <strong>BROWSER PROCESSING</strong>
                <span>
                  Combining structure, presentation and behaviour
                </span>
              </div>

              <div className="edduu-browser-render-page-content">

                <div className="edduu-browser-render-heading">
                  EDDUU
                </div>

                <div className="edduu-browser-render-line long" />
                <div className="edduu-browser-render-line medium" />

                <div className="edduu-browser-render-card-row">

                  <div className="edduu-browser-render-card">
                    HTML
                  </div>

                  <div className="edduu-browser-render-card">
                    CSS
                  </div>

                  <div className="edduu-browser-render-card">
                    JS
                  </div>

                </div>

                <button
                  type="button"
                  className="edduu-browser-render-demo-button"
                >
                  Explore
                </button>

              </div>

              <div className="edduu-browser-render-screen-label">
                SCREEN — WEBSITE READY
              </div>

            </div>

          </div>

        </div>

      ) : resolvedVisual === 'capstone' ? (

        <div className="edduu-capstone-visual">

          <div className="edduu-capstone-stage">
            <strong>1. BROWSER</strong>
            <span>
              User opens a website
            </span>
          </div>

          <div className="edduu-capstone-arrow">
            &#8595;
          </div>

          <div className="edduu-capstone-stage">
            <strong>2. DNS</strong>
            <span>
              Domain is resolved
            </span>
          </div>

          <div className="edduu-capstone-arrow">
            &#8595;
          </div>

          <div className="edduu-capstone-stage">
            <strong>3. NETWORK</strong>
            <span>
              Request travels toward the destination
            </span>
          </div>

          <div className="edduu-capstone-arrow">
            &#8595;
          </div>

          <div className="edduu-capstone-stage">
            <strong>4. SERVER</strong>
            <span>
              Remote system handles the request
            </span>
          </div>

          <div className="edduu-capstone-arrow">
            &#8595;
          </div>

          <div className="edduu-capstone-stage">
            <strong>5. HTTP RESPONSE</strong>
            <span>
              Server sends the result back
            </span>
          </div>

          <div className="edduu-capstone-arrow">
            &#8595;
          </div>

          <div className="edduu-capstone-stage">
            <strong>6. BROWSER DISPLAY</strong>
            <span>
              User sees the website
            </span>
          </div>

        </div>

      ) : (

        <div className="edduu-computer-model">

          <div className="edduu-computer-screen">
            <div className="edduu-computer-screen-glow" />
          </div>

          <div className="edduu-computer-base">
            <span />
          </div>

        </div>
      )}

      {!revealed ? (

        <button
          type="button"
          className="edduu-masterclass-experience-action"
          onClick={() => setRevealed(true)}
        >
          Show me what is inside
        </button>

      ) : (

        <>

          <div className="edduu-computer-parts">

            {animation.parts.map(
              (part) => (
                <div key={part.id}>

                  <strong>
                    {part.label}
                  </strong>

                  <span>
                    {part.explanation}
                  </span>

                  {part.example && (
                    <span>
                      {part.example}
                    </span>
                  )}

                </div>
              ),
            )}

          </div>

          {animation.closing && (
            <p>
              {animation.closing}
            </p>
          )}

          {onComplete && (
            <button
              type="button"
              className="edduu-masterclass-next"
              onClick={onComplete}
            >
              Continue
            </button>
          )}

        </>
      )}

    </section>
  )
}

export default AnimationRenderer
