const fs = require('fs');
const path = require('path');

const targetStr = '"https://indigo-falcon-607276.hostingersite.com/dashboard"';
const targetStr2 = 'href="https://indigo-falcon-607276.hostingersite.com/dashboard"';
const lmsUrlStr = 'LMS_URL';
const importStatement = 'import { LMS_URL } from "@/lib/config";\n';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'components', 'landing'));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace the exact URL string with the variable
    if (content.includes(targetStr)) {
        content = content.split(targetStr).join(lmsUrlStr);
        changed = true;
    }
    if (content.includes(targetStr2)) {
        content = content.split(targetStr2).join(`href={${lmsUrlStr}}`);
        changed = true;
    }

    // Special case for PublicSnapshotSection
    if (file.includes('PublicSnapshotSection') && content.includes('https://indigo-falcon-607276.hostingersite.com/programmes/')) {
        content = content.replace(/`https:\/\/indigo-falcon-607276\.hostingersite\.com\/programmes\/\$\{p\.id\}`/g, '`${LMS_URL}programmes/${p.id}`');
        changed = true;
    }

    if (changed) {
        // Add import if not present
        if (!content.includes('import { LMS_URL }')) {
            const lines = content.split('\n');
            let lastImportIndex = 0;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].startsWith('import ')) {
                    lastImportIndex = i;
                }
            }
            lines.splice(lastImportIndex + 1, 0, importStatement.trim());
            content = lines.join('\n');
        }
        fs.writeFileSync(file, content);
        console.log(`Updated ${file}`);
    }
});
