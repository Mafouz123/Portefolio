import DOMPurify from 'dompurify'
import { marked } from 'marked'
import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const sourcePath = `${import.meta.env.BASE_URL}mes_doc/${encodeURIComponent('IA Agent MongoDB  (4).md')}`

function MongodbAgentPage() {
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch(sourcePath, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Unable to load project document')
        return response.text()
      })
      .then((markdown) => {
        const markdownImages = markdown.replace(/`(!\[\]\[image\d+\])`/g, '$1')
        const accessibleImages = markdownImages.replace(
          /!\[\]\[image(\d+)\]/g,
          (_match, imageNumber: string) => `![Illustration du projet IA MongoDB ${imageNumber}][image${imageNumber}]`,
        )
        const localImages = accessibleImages.replace(
          /^\[image(\d+)\]: <data:image\/png;base64,[^>\r\n]+>$/gm,
          (_match, imageNumber: string) => `[image${imageNumber}]: ${import.meta.env.BASE_URL}mes_doc/mongodb-agent-${imageNumber.padStart(2, '0')}.png`,
        )
        const html = marked.parse(localImages, { async: false })
        setContent(DOMPurify.sanitize(html))
        document.title = 'Agent IA RAG MongoDB Atlas | Mafouzou Sanni Alidou'
        document.querySelector('meta[name="description"]')?.setAttribute(
          'content',
          'Étude de cas complète : conception et déploiement d’un agent IA RAG avec MongoDB Atlas Vector Search, LangChain et LangGraph.',
        )
      })
      .catch((loadError: unknown) => {
        if (loadError instanceof DOMException && loadError.name === 'AbortError') return
        setError(true)
      })

    return () => controller.abort()
  }, [])

  return (
    <div className="mongodb-page">
      <header className="case-header">
        <a className="case-brand" href={`${import.meta.env.BASE_URL}#accueil`}>
          <span className="case-brand-mark" aria-hidden="true"><span /></span>
          <span>MAFOUZOU SANNI ALIDOU<small>INGÉNIEUR SOLUTION · IA GÉNÉRATIVE</small></span>
        </a>
        <a className="case-back" href={`${import.meta.env.BASE_URL}#projets`}>
          <ArrowLeft size={16} aria-hidden="true" /> Retour aux projets
        </a>
      </header>
      <main className="case-main">
        {error ? (
          <p className="case-state" role="alert">Le document du projet n’a pas pu être chargé.</p>
        ) : content ? (
          <article className="case-markdown" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <p className="case-state" role="status">Chargement de l’étude de cas…</p>
        )}
        <footer className="case-footer">
          <a href="https://github.com/Mafouz123/mongodb-ai-agent" target="_blank" rel="noreferrer">
            Dépôt du projet <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={`${import.meta.env.BASE_URL}#projets`}>Retour au portfolio</a>
        </footer>
      </main>
    </div>
  )
}

export default MongodbAgentPage
