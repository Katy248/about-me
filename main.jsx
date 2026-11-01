import React from "react";
import { createRoot } from "react-dom/client";
import { portfolio } from "./portfolio.js";
import "./app.css";

const fullName = [portfolio.firstName, portfolio.lastName]
  .filter(Boolean)
  .join(" ");
document.title = `${fullName} - портфолио`;
document.querySelector('meta[name="description"]').content =
  `Личная страница и портфолио: ${fullName}.`;

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>

      <header className="site-header">
        <a className="logo" href="#top" aria-label={`${fullName} - на главную`}>
          {portfolio.initials}
          <span>.</span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#about">Обо мне</a>
          <a href="#work">Опыт и проекты</a>
          {portfolio.contact.links.length > 0 && (
            <a href="#contact">Контакты</a>
          )}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow">Привет, я</p>
            <h1 id="hero-title">
              {portfolio.firstName}
              <br />
              {portfolio.lastName}
              <span>.</span>
            </h1>
            <div className="hero-bottom">
              <p className="introduction">{portfolio.introduction}</p>
            </div>
          </div>
        </section>

        <section
          className="section about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-content about-content">
            <h2 id="about-title">
              Коротко
              <br />о себе<span>.</span>
            </h2>
            <div className="about-details">
              {portfolio.about.description.split("\n").map((p) => (
                <p className="about-description">{p}</p>
              ))}
              {portfolio.about.topics.length > 0 && (
                <div className="about-group">
                  <p className="detail-label">Чем я занимаюсь</p>
                  <ul className="tag-list">
                    {portfolio.about.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
              {portfolio.about.technologies.length > 0 && (
                <div className="about-group">
                  <p className="detail-label">Технологии</p>
                  <ul className="tag-list">
                    {portfolio.about.technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          className="section work"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-content">
            <div className="section-heading">
              <h2 id="work-title">
                Опыт и
                <br />
                проекты<span>.</span>
              </h2>
              <p>{portfolio.work.description}</p>
            </div>
            {portfolio.work.experience.length > 0 && (
              <div className="work-group">
                <h3 className="detail-label">Опыт работы</h3>
                <div className="experience-list">
                  {portfolio.work.experience.map((entry, index) => (
                    <article className="experience-entry" key={index}>
                      <div>
                        <h4>{entry.role}</h4>
                        {entry.company && (
                          <p className="experience-company">{entry.company}</p>
                        )}
                      </div>
                      <div>
                        {entry.period && (
                          <p className="experience-period">{entry.period}</p>
                        )}
                        {entry.description && (
                          <p className="experience-description">
                            {entry.description}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
            <div className="work-group">
              <h3 className="detail-label">Проекты</h3>
              <div className="project-grid">
                {portfolio.work.projects.map((project, index) => (
                  <article className="project-card" key={index}>
                    <h4 className="project-title">
                      {project.url ? (
                        <a href={project.url}>
                          {project.title} <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        project.title
                      )}
                    </h4>
                    <p className="project-description">{project.description}</p>
                    <p className="project-role">{project.role}</p>
                    {project.openSourceContribution && (
                      <span className="project-badge">Вклад в Open Source</span>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {portfolio.contact.links.length > 0 && (
          <section
            className="section contact"
            id="contact"
            aria-labelledby="contact-title"
          >
            <div className="section-content contact-content">
              <h2 id="contact-title">
                Для связи
                <br />
                со мной<span>.</span>
              </h2>
              <ul className="contact-links">
                {portfolio.contact.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <span>{fullName}</span>
        <a href="#top">Наверх ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
