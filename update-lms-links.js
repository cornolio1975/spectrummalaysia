const fs = require('fs');

const files = [
    'components/landing/AboutSection.tsx',
    'components/landing/CtaSection.tsx',
    'components/landing/HeroSection.tsx',
    'components/landing/LandingFooter.tsx',
    'components/landing/LandingHeader.tsx',
    'components/landing/ParticipantExperienceSection.tsx',
    'components/landing/ProgrammesCatalogueSection.tsx',
    'components/landing/TrainerExperienceSection.tsx',
    'components/landing/PublicSnapshotSection.tsx'
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes('href="https://indigo-falcon-607276.hostingersite.com/dashboard"')) {
        content = content.replace(/href="https:\/\/indigo-falcon-607276\.hostingersite\.com\/dashboard"/g, 'href={LMS_URL}');
        changed = true;
    }
    
    if (file.includes('PublicSnapshotSection') && content.includes('`https://indigo-falcon-607276.hostingersite.com/programmes/${p.id}`')) {
        content = content.replace(/`https:\/\/indigo-falcon-607276\.hostingersite\.com\/programmes\/\$\{p\.id\}`/g, '`${LMS_URL}programmes/${p.id}`');
        changed = true;
    }

    if (changed && !content.includes('import { LMS_URL }')) {
        const lines = content.split('\n');
        let insertIndex = 0;
        if (lines[0].includes('"use client"') || lines[0].includes("'use client'")) {
            insertIndex = 1;
        }
        lines.splice(insertIndex, 0, 'import { LMS_URL } from "@/lib/config";');
        content = lines.join('\n');
    }
    
    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Fixed ' + file);
    }
});
