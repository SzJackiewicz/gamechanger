'use server'

import React from 'react'
import Head from 'next/head'
import Accordion from '../../components/elements/Accordion'
import Layout from '../../components/layout/Layout'
import { BoardMembers } from '@/components/sections/BoardMembers'
import { PartnersLogs } from '@/components/sections/PartnersLogs'
import { CoverWithTestimonials } from '@/components/elements/CoverWithTestimonials'
import {getTeamData, Person} from "../../lib/api/getTeamData";
import {renderRule, StructuredText} from "react-datocms";
import {isBlockquote, isHeading, isParagraph} from "datocms-structured-text-utils";

export default function AboutPage() {
  const {allPeople, about, isLoading, error } = getTeamData();

  if (isLoading) return <div/>;
  if (error || !about || !allPeople) return <div/>;

  const councilMembers: Person[] = [];
  const boardMembers: Person[] = [];
  const otherMembers: Person[] = [];

  const councilIds = ['KoGauPXfTW2ecT4p6c9Vpw', 'Ksl1IeW4Q6W_0yETjijvmQ'];
  const boardIds = ['JuaaifcgTNy-dXzMpuwn-g', 'PRd6GDvCQJaPYIbRCbnzmQ'];
  const otherIds = ['Vv_ZRh7mT16EMj24gWNgVw']

  allPeople.forEach((person) => {
    if (person && person.positionitem) {
      if (person.positionitem.id && otherIds.includes(person.positionitem.id)) {
        otherMembers.push(person);
      } else if (person.positionitem.id && councilIds.includes(person.positionitem.id)) {
        councilMembers.push(person);
      } else if (person.positionitem.id && boardIds.includes(person.positionitem.id)) {
        boardMembers.push(person);
      }
    }
  })

  return (
    <>
      <Head>
        <title>Zarząd</title>
      </Head>
      <Layout>
        <div className='container'>
          <CoverWithTestimonials img='/assets/imgs/page/o-nas/aboutus.png' />
          <div className='row'>
            <div className='col-xl-12 col-lg-12 margin-auto'>
              <StructuredText
                  data={about.content}
                  customNodeRules={[
                    renderRule(isParagraph, ({ children, key }) => {
                      return (
                          <p key={key} className="font-sm-clamp color-gray-500 mb-20">
                            {children}
                          </p>
                      );
                    }),
                    renderRule(isBlockquote, ({ children, key }) => {
                      return (
                          <div key={key} className="box-quote" data-wow-delay=".1s">
                            <h4 key={key} className="color-gray-500 text-cursive font-md-clamp">
                              {children}
                            </h4>
                          </div>
                      );
                    }),
                    renderRule(isHeading, ({ node, children, key }) => {
                      if (node.level === 4) {
                        return (
                            <h4 key={key} className="color-gray-500 font-md-clamp mb-40" data-wow-delay='.3s'>
                              {children}
                            </h4>
                        );
                      }
                      return null; // Ignore other heading levels or handle them as needed
                    }),
                  ]}
              />
            <div className='col-xl-10 col-lg-12 margin-auto'>
                {boardMembers.length > 0 && (
                    <BoardMembers
                        title='Zarząd'
                        members={boardMembers}
                    />
                )}
                {councilMembers.length > 0 && (
                    <BoardMembers
                        title='Rada fundacji'
                        members={councilMembers}
                    />
                )}
                {otherMembers.length > 0 && (
                    <BoardMembers
                        title='Team'
                        members={otherMembers}
                    />
                )}
                <div className='box-faqs mb-70 mt-40'>
                  <Accordion />
                </div>
              </div>
              <PartnersLogs />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
